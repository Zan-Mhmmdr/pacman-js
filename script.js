const canvas = document.getElementById("game");
const canvasContex = canvas.getContext("2d");

console.log(canvas);
console.log(canvasContex);

let createRect = (x, y, width, height, color) => {
  canvasContex.fillStyle = color;
  canvasContex.fillRect(x, y, width, height);
};

