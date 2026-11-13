
const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const ctx = overlay.getContext("2d");

const statusEl = document.getElementById("status");
const prompt = document.getElementById("cameraPrompt");
const startButton = document.getElementById("start");
const retry = document.getElementById("retry");
const back = document.getElementById("back");

let camera;
let hands;
let matchedFrames = 0;
let done = false;
let processing = false;

const setStatus = (text) => {
  statusEl.textContent = text;
};

const distance = (a, b) =>
  Math.hypot(a.x - b.x, a.y - b.y);

/* MediaPipe 인식 결과 */

function onResults(results) {
  const width = video.videoWidth || 640;
  const height = video.videoHeight || 480;

  overlay.width = width;
  overlay.height = height;

  ctx.clearRect(0, 0, width, height);

  const landmarks = results.multiHandLandmarks || [];

  /* 카메라와 좌우 반전 일치 */
  ctx.save();
  ctx.translate(width, 0);
  ctx.scale(-1, 1);

  for (const hand of landmarks) {
    drawConnectors(ctx, hand, HAND_CONNECTIONS, {
      color: "#2bd5c9",
      lineWidth: 3
    });

    drawLandmarks(ctx, hand, {
      color: "#ffffff",
      fillColor: "#2bd5c9",
      radius: 2
    });
  }

  ctx.restore();

  if (done) return;

  if (!landmarks.length) {
    matchedFrames = 0;
    setStatus("손을 카메라 안에 보여주세요");
    return;
  }

  /* 기존 손동작 판정 로직 */

  const matched = landmarks.some((hand) => {
    const palm = Math.max(
      distance(hand[0], hand[9]),
      0.04
    );

    const folded = [4, 12, 16, 20].every((tip) => {
      const joint = tip === 4 ? 2 : tip - 2;

      return (
        distance(hand[tip], hand[joint]) / palm < 1.35
      );
    });

    const centered =
      hand[0].x > 0.3 &&
      hand[0].x < 0.7;

    return folded && centered;
  });

  matchedFrames = matched
    ? matchedFrames + 1
    : Math.max(0, matchedFrames - 2);

  if (matched) {
    const progress = Math.min(
      100,
      Math.round((matchedFrames / 20) * 100)
    );

    setStatus(`동작 인식 중… ${progress}%`);
  } else {
    setStatus("손 모양을 따라 해보세요");
  }

  if (matchedFrames >= 20) {
    done = true;
    setStatus("✓ 동작이 인식되었어요!");
    retry.hidden = false;
  }
}

/* 카메라 시작 */

async function startCamera() {
  try {
    startButton.disabled = true;
    setStatus("카메라 연결 중…");

    if (!window.Hands || !window.Camera) {
      throw new Error(
        "MediaPipe 라이브러리를 불러오지 못했습니다."
      );
    }

    hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);

    camera = new Camera(video, {
      onFrame: async () => {
        if (processing) return;

        processing = true;

        try {
          await hands.send({ image: video });
        } catch (error) {
          console.error("손 인식 오류:", error);
        } finally {
          processing = false;
        }
      },

      width: 640,
      height: 480,
      facingMode: "user"
    });

    await camera.start();

    prompt.hidden = true;
    setStatus("손을 카메라 안에 보여주세요");

  } catch (error) {
    console.error("카메라 오류:", error);

    startButton.disabled = false;
    setStatus("카메라를 사용할 수 없어요");

    const message = prompt.querySelector("p");

    if (message) {
      message.textContent =
        error.message ||
        "카메라 권한과 HTTPS 연결을 확인해주세요.";
    }
  }
}

/* 버튼 연결 */

startButton.addEventListener("click", startCamera);

retry.addEventListener("click", () => {
  done = false;
  matchedFrames = 0;
  retry.hidden = true;
  setStatus("다시 따라 해보세요");
});

back.addEventListener("click", () => {
  if (camera) {
    camera.stop();
  }

  if (history.length > 1) {
    history.back();
  }
});
