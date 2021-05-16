var gameState = 0
var playerCount = 0
var database 
var form,player,game
var allPlayers
var car1
var car2,car3,car4
var cars
var red,blue,yellow,pink,track,welcome
function preload() {
    red=loadImage("red.png")
    blue=loadImage("cyan.png")
    pink=loadImage("pink.png")
    yellow=loadImage("yellow.png")
    track=loadImage("track.jpg")
    welcome=loadImage("welcome.jpg")
}
function setup (){
    createCanvas(displayWidth,displayHeight)
    database = firebase.database()
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
    background(welcome)
if(playerCount===4){
    game.update(1)
}
if (gameState===1){
    clear()
        game.play()
}
}
