
// UI 배치 전용 파일
// MediaPipe와 수어 인식 로직은 수정하지 않음.

window.addEventListener("load", () => {
  const cameraSection =
    document.getElementById("cameraSection");

  function moveCanvas() {
    // 기존 sketch.js가 생성한 p5 캔버스
    const canvas = document.querySelector("body > canvas");

    if (canvas) {
      cameraSection.appendChild(canvas);
      return;
    }

    // p5 캔버스가 아직 생성되지 않았다면 기다림
    requestAnimationFrame(moveCanvas);
  }

  moveCanvas();
});
