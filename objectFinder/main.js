status = ""
object = ""
function preload(){
    video = createVideo('video.mp4');
    video.hide();
        }
    function setup(){
        canvas= createCanvas(380, 380);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        video.size(380, 380);
    
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "status : Detecting Objects";
       
    }
    function modelLoaded()
    {
        console.log("Model Loaded!");
        status = true;
    
    }
    function gotResults(error, results){
        if(error){
            console.log(error);
    
        }
        console.log(results);
        objects = results;
        if(objects == person){
    
        }
    }
    
    
    function draw(){
        image(video, 0, 0, 380, 380);
    }
    function start(){
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML =  "status : Detecting Objects";
        object = document.getElementById("objectName").innerHTML;
    }
    function modelLoaded(){
        console.log("ModelLoaded!");
        status = true;
    }