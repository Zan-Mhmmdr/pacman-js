// Setup canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Game variables
let pacman = { x: 50, y: 50, size: 20, speed: 5, dirX: 0, dirY: 0 };
let score = 0;
let gameOver = false;

// Handle keyboard input
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      pacman.dirX = 0;
      pacman.dirY = -1;
      break;
    case "ArrowDown":
      pacman.dirX = 0;
      pacman.dirY = 1;
      break;
    case "ArrowLeft":
      pacman.dirX = -1;
      pacman.dirY = 0;
      break;
    case "ArrowRight":
      pacman.dirX = 1;
      pacman.dirY = 0;
      break;
  }
});

// Update game state
function update() {
  if (gameOver) return;

  pacman.x += pacman.dirX * pacman.speed;
  pacman.y += pacman.dirY * pacman.speed;

  // Simple boundary collision
  if (pacman.x < 0) pacman.x = 0;
  if (pacman.y < 0) pacman.y = 0;
  if (pacman.x + pacman.size > canvas.width)
    pacman.x = canvas.width - pacman.size;
  if (pacman.y + pacman.size > canvas.height)
    pacman.y = canvas.height - pacman.size;

  // TODO: tambah logika tabrakan dengan musuh dan item
}

// Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Gambar Pac-Man
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(
    pacman.x + pacman.size / 2,
    pacman.y + pacman.size / 2,
    pacman.size / 2,
    0.25 * Math.PI,
    1.75 * Math.PI
  );
  ctx.lineTo(pacman.x + pacman.size / 2, pacman.y + pacman.size / 2);
  ctx.fill();

  // TODO: gambar musuh, item, skor
}

// Game loop pakai requestAnimationFrame
function gameLoop() {
  update();
  draw();
  if (!gameOver) requestAnimationFrame(gameLoop);
}

// Mulai game
gameLoop();
