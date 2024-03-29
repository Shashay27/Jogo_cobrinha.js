let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = []; 
snake [0]= {
    x: 8 * box,
    y:8 * box
}
let direction = "right"
let food ={
    x: Math.floor(math.random() *15+1) *box,
    y: match.floor(match.random() *15+1) *box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect (0,0,16 *box, 16 *box);
}

function criarCobrinha() {
    for(i=0; i< snake.length; i++){
       context.fillStyle = "green";
       context.fillRect (snake[i].x, snake[i].y, box, box);
    }
}

function drawFood () {
    context.fillstyle = "red";
    context.fillrect(food.x, food.y, box, box);
}

//quando um evento acontece, detecta e chama uma função
document.addEventListener("keydown", update);

function update (event) {
if(event.keycode == 37 && direction!= 'right') direction = "left";
if(event.keycode == 38 && direction!= "down") direction = "up";
if(event.keycode == 39 && direction!= "left") direction = "right";
if(event.keycode == 40 && direction!= "up") direction = "down";
}

function iniciarJogo() {

    if(snake[0].x> 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x< 0 && direction =="left") snake[0].x = 16*box;
    if(snake[0].y> 15*box && direction =="down") snake[0].y= 0;
    if(snake[0].y< 0 && direction == "up") snake[0].y =16*box;

for(i=1; i< snake.length; i++){
    if(snake[0].x ==snake[i].x && snake[0].y == snake[i].y){
        clearInterval(jogo);
        alert("Gamer Over :(");
    }
}

    criarBG();
    criarCobrinha();
    drawFood();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box;
    if(direction =="up") snakey -= box;
    if(direction == "down") snakey += box;

    if(snakeX != food.x|| snakeY != food.y){
        snake.pop(); //pop tira o último elemento da lista
    }
    else{food.x = math.floor(math.randow()* 15+1) *box;
        food.y = math.floor(math.random() *15+1) *box;
    }
    
    let newHead = {
        x: snakeX ; 
        y : snakeY,
        get y() {
            return this._y;
        },
        set y(value) {
            this._y = value;
        },
    }

snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100)
criarBG();
criarCobrinha();