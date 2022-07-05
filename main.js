leftWristX = 0; 
rightWristX  = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.position(50, 100);
    canvas = createCanvas(570, 350);
    canvas.position(540, 125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized and Loaded");
}

function draw()
{
    background("crimson");
    document.getElementById("font_size").innerHTML = "font size of the text will be = " + difference + "px";
    textSize(difference);
    fill("turquoise");
    text("Samarth", 50, 170);
}

function gotPoses(results,error)
{
   if(error){
    console.error(error);
   }
   if(results.length > 0){
    console.log(results);

rightWristX = results[0].pose.rightWrist.x;
leftWristX = results[0].pose.leftWrist.x;


    console.log("rightwrist_x = " + results[0].pose.rightWrist.x + "rightwrist_y = " + results[0].pose.rightWrist.y);
    console.log("leftwrist_x = " + results[0].pose.leftWrist.x + "leftwrist_y = " + results[0].pose.leftWrist.y);

    difference = floor(leftWristX - rightWristX);
}
}