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

let direction = "right";

function startGame() {
    createBG();
    createSnake();

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
