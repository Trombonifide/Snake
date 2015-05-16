var layer1;
var layer2;
var ctx1;
var ctx2;
var w = 500;
var h = 500;
var dx = 10;
var dy = 10;
var snake_array;

function init() {
layer1 = document.getElementById("layer1");
ctx1 = layer1.getContext("2d");
layer2 = document.getElementById("layer2");
ctx2 = layer2.getContext("2d");
setInterval(drawAll(), 60);
}

function drawAll() {
draw1();
draw2();
}

function draw1() {
  ctx1.fillStyle = "black";
  ctx1.fillRect(0,0,w,h);
}

function draw2() {
  ctx2.strokeStyle = "lime";
  ctx2.strokeRect(0,0,w,h);
}

function create_snake()
{
var length = 5;
snake_array =[];
for(var i = length-1; i>=0; i--)
{
  snake_array.push({x:i, y:1});
}
}

init();