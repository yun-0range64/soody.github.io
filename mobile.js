const video=document.getElementById('video'),overlay=document.getElementById('overlay'),ctx=overlay.getContext('2d');
const statusEl=document.getElementById('status'),prompt=document.getElementById('cameraPrompt'),retry=document.getElementById('retry');
let camera,hands,matchedFrames=0,done=false,processing=false;
const setStatus=t=>statusEl.textContent=t;
// 기존 프로젝트의 MediaPipe Hands 및 '엄지·중지·약지·소지 접기 + 손 중앙 위치' 판정 방식을 모바일 비율에 맞춰 사용합니다.
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
function onResults(results){
 const w=overlay.width=video.videoWidth||640,h=overlay.height=video.videoHeight||480;ctx.clearRect(0,0,w,h);
 const landmarks=results.multiHandLandmarks||[];
 for(const hand of landmarks){drawConnectors(ctx,hand,HAND_CONNECTIONS,{color:'#2bd5c9',lineWidth:3});drawLandmarks(ctx,hand,{color:'#fff',fillColor:'#2bd5c9',radius:2});}
 if(done)return;
 if(!landmarks.length){matchedFrames=0;setStatus('손을 카메라 안에 보여주세요');return;}
 // 원본 sketch.js의 픽셀 기준 거리(<90px)를 손바닥 크기에 대한 상대값으로 정규화.
 const matched=landmarks.some(h=>{const palm=Math.max(distance(h[0],h[9]),0.04);const folded=[4,12,16,20].every(t=>distance(h[t],h[t===4?2:t-2])/palm<1.35);const centered=h[0].x>0.3&&h[0].x<0.7;return folded&&centered;});
 matchedFrames=matched?matchedFrames+1:Math.max(0,matchedFrames-2);
 setStatus(matched?'동작 인식 중… '+Math.min(100,Math.round(matchedFrames/20*100))+'%':'손 모양을 따라 해보세요');
 if(matchedFrames>=20){done=true;setStatus('✓ 동작이 인식되었어요!');retry.hidden=false;}
}
async function start(){try{setStatus('카메라 연결 중…');document.getElementById('start').disabled=true;if(!window.Hands||!window.Camera)throw Error('MediaPipe 라이브러리를 불러오지 못했습니다. 인터넷 연결을 확인해주세요.');hands=new Hands({locateFile:file=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`});hands.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.8,minTrackingConfidence:.5});hands.onResults(onResults);camera=new Camera(video,{onFrame:async()=>{if(processing)return;processing=true;try{await hands.send({image:video})}finally{processing=false}},width:640,height:480,facingMode:'user'});await camera.start();prompt.hidden=true;prompt.style.display='none';setStatus('손을 카메라 안에 보여주세요')}catch(e){document.getElementById('start').disabled=false;setStatus('카메라를 사용할 수 없어요');prompt.querySelector('p').textContent=e.message||'카메라 권한과 HTTPS 연결을 확인해주세요.';}}
document.getElementById('start').addEventListener('click',start);retry.addEventListener('click',()=>{done=false;matchedFrames=0;retry.hidden=true;setStatus('다시 따라 해보세요')});document.getElementById('back').addEventListener('click',()=>{if(history.length>1)history.back()});



/* SOODY 카메라 연결 */

async function startSoodyCamera() {
  const video = document.getElementById("cameraVideo");

  if (!video) return;

  // 이미 카메라가 연결되어 있으면 중복 실행하지 않음
  if (video.srcObject) return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: "user"
      }
    });

    video.srcObject = stream;
    await video.play();

  } catch (error) {
    console.error("카메라 연결 실패:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startSoodyCamera();
});
