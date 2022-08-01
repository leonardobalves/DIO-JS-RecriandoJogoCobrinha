let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);    
}

function createSnake() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "darkgreen";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function drawFood() {
    context.fillStyle= "coral";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);
function update(event) {
    if(event.keyCode == 39 && direction != "left") direction = "right"; //keyCode 39 = seta para direita
    if(event.keyCode == 37 && direction != "right") direction = "left"; //keyCode 37 = seta para esquerda
    if(event.keyCode == 38 && direction != "down") direction = "up"; //keyCode 38 = seta para cima
    if(event.keyCode == 40 && direction != "up") direction = "down"; //keyCode 40 = seta para baixo
}

let direction = "right";

function startGame() {
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    createBG();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "down") snakeY += box;
    if(direction == "up") snakeY -= box;
    
    snake.pop();
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);
