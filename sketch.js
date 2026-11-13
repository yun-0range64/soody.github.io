let canvas;
// p5js를 사용할 수 잇도록 일단 제작이된것 p5js와 다르게 p.이라고 쓰고 제작해야됨 
let sketch = function(p) {
    p.setup = function() {
    canvas =  p.createCanvas(995, 575, p.WEBGL);
    };
  
    p.draw = function() {
      p.clear();
      p.translate(-(p.width)/2 , -p.height/2)

//detection이 undefined가 아닐때
      if(detections != undefined){
        //detections.multiHandLandmarks가 undefined가 아닐때
        if(detections.multiHandLandmarks != undefined){
          //drawhands라는 함수를 실행시켜라
          p.drawhands();
        }
      }
    };
//drawhands라는 함수는 아래의 내용과 같다
    p.drawhands = function(){
      p.stroke(0 , 255 , 0)
      p.strokeWeight(10)

//여기에는 손의 위치를 각각 숫자로 줌 피그마에 정리된 손 번호 있음

      for(let i = 0; i <  detections.multiHandLandmarks.length; i++){
        for(let j = 0; j < detections.multiHandLandmarks[i].length; j++){
          const keypoints  = detections.multiHandLandmarks

          let x = keypoints[i][j].x*p.width
          let y = keypoints[i][j].y*p.height
          let z = keypoints[i][j].z

          let PINKY_TIPx = keypoints[i][20].x*p.width;
          let PINKY_TIPy = keypoints[i][20].y*p.height;
          let PINKY_TIPz = keypoints[i][20].z;

          let PINKY_DIPx = keypoints[i][19].x*p.width;
          let PINKY_DIPy = keypoints[i][19].y*p.height;
          let PINKY_DIPz = keypoints[i][19].z;

          let PINKY_PIPx = keypoints[i][18].x*p.width;
          let PINKY_PIPy = keypoints[i][18].y*p.height;
          let PINKY_PIPz = keypoints[i][18].z;

          let PINKY_MCPx = keypoints[i][17].x*p.width;
          let PINKY_MCPy = keypoints[i][17].y*p.height;
          let PINKY_MCPz = keypoints[i][17].z;

          let RING_FINGER_TIPx = keypoints[i][16].x*p.width;
          let RING_FINGER_TIPy = keypoints[i][16].y*p.height;
          let RING_FINGER_TIPz = keypoints[i][16].z;

          let RING_FINGER_DIPx = keypoints[i][15].x*p.width;
          let RING_FINGER_DIPy = keypoints[i][15].y*p.height;
          let RING_FINGER_DIPz = keypoints[i][15].z;

          let RING_FINGER_PIPx = keypoints[i][14].x*p.width;
          let RING_FINGER_PIPy = keypoints[i][14].y*p.height;
          let RING_FINGER_PIPz = keypoints[i][14].z;

          let RING_FINGER_MCPx = keypoints[i][13].x*p.width;
          let RING_FINGER_MCPy = keypoints[i][13].y*p.height;
          let RING_FINGER_MCPz = keypoints[i][13].z;

          let MIDDLE_FINGER_TIPx = keypoints[i][12].x*p.width;
          let MIDDLE_FINGER_TIPy = keypoints[i][12].y*p.height;
          let MIDDLE_FINGER_TIPz = keypoints[i][12].z;

          let MIDDLE_FINGER_DIPx = keypoints[i][11].x*p.width;
          let MIDDLE_FINGER_DIPy = keypoints[i][11].y*p.height;
          let MIDDLE_FINGER_DIPz = keypoints[i][11].z;

          let MIDDLE_FINGER_PIPx = keypoints[i][10].x*p.width;
          let MIDDLE_FINGER_PIPy = keypoints[i][10].y*p.height;
          let MIDDLE_FINGER_PIPz = keypoints[i][10].z;

          let MIDDLE_FINGER_MCPx = keypoints[i][9].x*p.width;
          let MIDDLE_FINGER_MCPy = keypoints[i][9].y*p.height;
          let MIDDLE_FINGER_MCPz = keypoints[i][9].z;

          let INDEX_FINGER_TIPx = keypoints[i][8].x*p.width;
          let INDEX_FINGER_TIPy = keypoints[i][8].y*p.height;
          let INDEX_FINGER_TIPz = keypoints[i][8].z;

          let INDEX_FINGER_DIPx = keypoints[i][7].x*p.width;
          let INDEX_FINGER_DIPy = keypoints[i][7].y*p.height;
          let INDEX_FINGER_DIPz = keypoints[i][7].z;

          let INDEX_FINGER_PIPx = keypoints[i][6].x*p.width;
          let INDEX_FINGER_PIPy = keypoints[i][6].y*p.height;
          let INDEX_FINGER_PIPz = keypoints[i][6].z;

          let INDEX_FINGER_MCPx = keypoints[i][5].x*p.width;
          let INDEX_FINGER_MCPy = keypoints[i][5].y*p.height;
          let INDEX_FINGER_MCPz = keypoints[i][5].z;

          let THUMB_TIPx = keypoints[i][4].x*p.width;
          let THUMB_TIPy = keypoints[i][4].y*p.height;
          let THUMB_TIPz = keypoints[i][4].z;

          let THUMB_PIPx = keypoints[i][3].x*p.width;
          let THUMB_PIPy = keypoints[i][3].y*p.height;
          let THUMB_PIPz = keypoints[i][3].z;

          let THUMB_MCPx = keypoints[i][2].x*p.width;
          let THUMB_MCPy = keypoints[i][2].y*p.height;
          let THUMB_MCPz = keypoints[i][2].z;

          let THUMB_CMCx = keypoints[i][1].x*p.width;
          let THUMB_CMCy = keypoints[i][1].y*p.height;
          let THUMB_CMCz = keypoints[i][1].z;
   
          let WRISTx = keypoints[i][0].x*p.width;
          let WRISTy = keypoints[i][0].y*p.height;
          let WRISTz = keypoints[i][0].z;


          
          p.point(x,y,z);

          p.strokeWeight(10)
          
          // // 검지의 손가락의 위치를 각각 잡아준다.
          // p.point(INDEX_FINGER_TIPx,INDEX_FINGER_TIPy,INDEX_FINGER_TIPz)
          // // 중지의 손가락의 위치를 각각 잡아준다.
          // p.point(MIDDLE_FINGER_TIPx,MIDDLE_FINGER_TIPy,MIDDLE_FINGER_TIPz)

          p.strokeWeight(12)
          

          // //손바닥
          // p.point(377,172,-0.2)

          // //엄지
          // p.point(316,198,-0.2)//cmc
          // p.point(279, 221,-0.2)//mcp
          // p.point(238,230,-0.2)//ip
          // p.point(198,225,-0.2)//tip

          // //검지
          // p.point(296,252,-0.2)//mcp
          // p.point(287, 303,-0.2)//pip
          // p.point(283,347,-0.2)//dip
          // p.point(282,400,-0.2)//tip

          // //중지
          // p.point(321,257,-0.2)//mcp
          // p.point(308, 312,-0.2)//pip
          // p.point(308,286,-0.2)//dip
          // p.point(311,252,-0.2)//tip
          
          // //약지
          // p.point(345,281,-0.2)//mcp
          // p.point(332, 313,-0.2)//pip
          // p.point(330,287,-0.2)//dip
          // p.point(332,253,-0.2)//tip

          // //새끼
          // p.point(371,261,-0.2)//mcp
          // p.point(358, 316,-0.2)//pip
          // p.point(353,290,-0.2)//dip
          // p.point(356,256,-0.2)//tip


        
          //기본 컬러 노랑색
          p.stroke(255 , 0 , 0);

          // let WRIST_distance = p.dist(WRISTx, WRISTy, WRISTz ,377,198,-0.2) 

          // let THUMB_CMCdistance = p.dist(THUMB_CMCx, THUMB_CMCy, THUMB_CMCz ,316,198,-0.2) 
          // let THUMB_MCPdistance = p.dist(THUMB_MCPx, THUMB_MCPy, THUMB_MCPz ,279,221,-0.2) 
          // let THUMB_PIPdistance = p.dist(THUMB_PIPx, THUMB_PIPy, THUMB_PIPz ,238,230,-0.2) 
          // let THUMB_TIPdistance = p.dist(THUMB_TIPx, THUMB_TIPy, THUMB_TIPz ,198,225,-0.2) 

          // let INDEX_FINGER_MCPdistance = p.dist(INDEX_FINGER_MCPx, INDEX_FINGER_MCPy, INDEX_FINGER_MCPz ,296,252,-0.2) 
          // let INDEX_FINGER_PIPdistance = p.dist(INDEX_FINGER_PIPx, INDEX_FINGER_PIPy, INDEX_FINGER_PIPz ,287,303,-0.2) 
          // let INDEX_FINGER_DIPdistance = p.dist(INDEX_FINGER_DIPx, INDEX_FINGER_DIPy, INDEX_FINGER_DIPz ,283,347,-0.2) 
          // let INDEX_FINGER_TIPdistance = p.dist(INDEX_FINGER_TIPx, INDEX_FINGER_TIPy, INDEX_FINGER_TIPz ,282,400,-0.2) 
          
          // let MIDDLE_FINGER_MCPdistance = p.dist(MIDDLE_FINGER_MCPx, MIDDLE_FINGER_MCPy, MIDDLE_FINGER_MCPz ,321,257,-0.2) 
          // let MIDDLE_FINGER_PIPdistance = p.dist(MIDDLE_FINGER_PIPx, MIDDLE_FINGER_PIPy, MIDDLE_FINGER_PIPz ,308,312,-0.2) 
          // let MIDDLE_FINGER_DIPdistance = p.dist(MIDDLE_FINGER_DIPx, MIDDLE_FINGER_DIPy, MIDDLE_FINGER_DIPz ,308,286,-0.2) 
          // let MIDDLE_FINGER_TIPdistance = p.dist(MIDDLE_FINGER_TIPx, MIDDLE_FINGER_TIPy, MIDDLE_FINGER_TIPz ,311,252,-0.2) 
          
          // let RING_FINGER_MCPdistance = p.dist(RING_FINGER_MCPx, RING_FINGER_MCPy, RING_FINGER_MCPz ,345,281,-0.2) 
          // let RING_FINGER_PIPdistance = p.dist(RING_FINGER_PIPx, RING_FINGER_PIPy, RING_FINGER_PIPz ,332,313,-0.2) 
          // let RING_FINGER_DIPdistance = p.dist(RING_FINGER_DIPx, RING_FINGER_DIPy, RING_FINGER_DIPz ,330,287,-0.2) 
          // let RING_FINGER_TIPdistance = p.dist(RING_FINGER_TIPx, RING_FINGER_TIPy, RING_FINGER_TIPz ,332,253,-0.2) 

          // let PINKY_MCPdistance = p.dist(PINKY_MCPx, PINKY_MCPy, PINKY_MCPz ,371,261,-0.2) 
          // let PINKY_PIPdistance = p.dist(PINKY_PIPx, PINKY_PIPy, PINKY_PIPz ,358,316,-0.2) 
          // let PINKY_DIPdistance = p.dist(PINKY_DIPx, PINKY_DIPy, PINKY_DIPz ,353,290,-0.2) 
          // let PINKY_TIPdistance = p.dist(PINKY_TIPx, PINKY_TIPy, PINKY_TIPz ,356,256,-0.2) 
          
          let Thumb_distance = p.dist(THUMB_TIPx, THUMB_TIPy, THUMB_TIPz ,THUMB_MCPx,THUMB_MCPy,THUMB_MCPz) 
          let Index_distance = p.dist(INDEX_FINGER_TIPx, INDEX_FINGER_TIPy, INDEX_FINGER_TIPz ,INDEX_FINGER_MCPx,INDEX_FINGER_MCPy,INDEX_FINGER_MCPz) 
          let Middle_distance = p.dist(MIDDLE_FINGER_TIPx, MIDDLE_FINGER_TIPy, MIDDLE_FINGER_TIPz ,MIDDLE_FINGER_MCPx,MIDDLE_FINGER_MCPy,MIDDLE_FINGER_MCPz) 
          let Ring_distance = p.dist(RING_FINGER_TIPx, RING_FINGER_TIPy, RING_FINGER_TIPz ,RING_FINGER_MCPx,RING_FINGER_MCPy,RING_FINGER_MCPz) 
          let Pinky_distance = p.dist(PINKY_TIPx, PINKY_TIPy, PINKY_TIPz ,PINKY_MCPx,PINKY_MCPy,PINKY_MCPz) 
          

          let ThumbtoIndex = p.dist( THUMB_TIPx, THUMB_TIPy, THUMB_TIPz ,INDEX_FINGER_PIPx, INDEX_FINGER_PIPy, INDEX_FINGER_PIPz )
          let ThumbtoMiddle = p.dist( THUMB_TIPx, THUMB_TIPy, THUMB_TIPz , MIDDLE_FINGER_PIPx, MIDDLE_FINGER_PIPy, MIDDLE_FINGER_PIPz)
          let ThumbtoRing = p.dist( THUMB_TIPx, THUMB_TIPy, THUMB_TIPz , RING_FINGER_PIPx, RING_FINGER_PIPy, RING_FINGER_PIPz )
          let ThumbtoPinky = p.dist( THUMB_TIPx, THUMB_TIPy, THUMB_TIPz , PINKY_PIPx, PINKY_PIPy, PINKY_PIPz )
          
          let MCP_distance=p.dist(INDEX_FINGER_MCPx, INDEX_FINGER_MCPy, INDEX_FINGER_MCPz, MIDDLE_FINGER_MCPx, MIDDLE_FINGER_MCPy, MIDDLE_FINGER_MCPz)
         // document.getElementById("sentence_red_01").src = "./images/Vector 12.png"
        
        let Index_dd = p.dist(INDEX_FINGER_TIPx, INDEX_FINGER_TIPy, INDEX_FINGER_TIPz)
        //'ㄱ'자 했을 때
        //  if(INDEX_FINGER_TIPdistance < 20){
        //  p.stroke(255 , 0 , 0);
        //    if(MIDDLE_FINGER_TIPdistance < 20){
                //두손이 겹쳤을때 보라색
        //      console.log(Index_distance)

        //      p.stroke(255 , 0 , 255);
        //    }
        //}
         
        
          
      //<너무 - 오른쪽 엄지와 검지만 편 상태로 왼쪽에서 오른쪽으로 이동한다.>
      
          //엄지, 중지, 약지, 새끼를 쥐었을 때    
          if(Thumb_distance <90 && Middle_distance < 90 && Ring_distance < 90 && Pinky_distance < 90){
            p.stroke(255, 0, 0);
            console.log('주먹쥠')
              
              //if(MCP_distance < 50){
             //   p.stroke(0, 255, 0);
             // }
             //가운데로 모으면, 검정변경
            if(WRISTx > 300 && WRISTx < 700){
              p.stroke(0, 255, 0);
              $("#red1").attr("src", "./images/green1.png")
              console.log('진행중')
              setTimeout(function(){$(".next-btn").css("visibility", "visible")}, 3000);    
            //  setTimeout(function(){ console.log('작동됨!!!!') }, 5000);
            //  setTimeout(function(){ window.location.href="./main.html" }, 100);
            }else if(WRISTx <= 300 && WRISTx >= 700){
              console.log('진행중끝')
            }
            



              //마지막 지점에 도착 시, 초록변경
             // if(WRISTx > 400 && WRISTx < 450){
              //  p.stroke(0, 0, 0);
              //  $("#sentence_red_01").attr("src", "./images/Vector 12.png");
              //  $("#sentence_reddot_01").css("opacity", 0);
             // }

              }
              
            }
          }

       
      //<좋아요 - 오른쪽 손을 주먹쥐고 코에 옆면(엄지와 검지 쪽)이 닿게 한다.>
      //let MCP_distance = p.dist( INDEX_FINGER_MCPx, MIDDLE_FINGER_MCPx, RING_FINGER_MCPx, PINKY_MCPx )
    
      //if(ThumbtoIndex < 80 && ThumbtoMiddle < 70 && ThumbtoRing < 80 && ThumbtoPinky < 90){
        //p.stroke(255 , 255, 0);
        //if(Index_distance < 50 && Middle_distance < 50 && Ring_distance < 50 && Pinky_distance < 50 && Thumb_distance < 50){
          //p.stroke(255 , 0, 0);
        
          //if(WRISTy > 230 && WRISTy < 280){
          //p.stroke(0, 255, 0);
          //$("#sentence_red_02").attr("src", "./images/Vector 16.png");
          //}
        //}else{
          //p.stroke(255, 0, 0);
          //$("#sentence_red_02").attr("src", "./images/Vector 15.png");
        //}
   //}
            
          }

    

       
    
  };

  

  //p5js를 실행시키는 함수
  
  let myp5 = new p5(sketch);











