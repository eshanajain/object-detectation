img="";
status = "";

function setup() 
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
    img=loadImage("dog_cat.jpg");
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() 
{
    image(img, 0, 0, 640, 420);
    fill('#FF0000');
    text("dog", 70, 75);
    noFill();
    stroke('#800080');
    rect(50,60,300,500);


    fill('#FF0000');
    text("cat", 350, 75);
    noFill();
    stroke('#800080');
    rect(300,40,300,350);  
}