img="";

function setup() 
{
    canvas=createCanvas(640,420);
    canvas.center();
}

function preload()
{
    img=loadImage("dog_cat.jpg");
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill('#FF0000');
    text("dog", 70, 75);
    noFill();
    stroke('#800080');
    rect(50,60,300,500);
}