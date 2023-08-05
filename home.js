img="";
objects=[];
status="";


function dogcat(){
    window.location = "dogcat.html";
}
function bottles(){
    window.location = "bottles.html";
}
function fruits(){
    window.location = "fruits.html";
}
function tv(){
    window.location = "tv.html";
}
function books(){
    window.location = "books.html";
}





function preload(){
    img=loadImage('fruit.jpg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(img, 0, 0, 640, 420);

        if(status !=""){
            for (i=0; i<objects.length; i++){
                document.getElementById("status").innerHTML="Status : Objects Detected";

                fill("#FF0000");
                percent=floor(objects[i].confidence*100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y+15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
}