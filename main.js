LeftWristx = 0;
RightWristx = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);  
}

function draw(){
    background('#969A97');   
    document.getElementById("label").innerHTML = "Square's Width and Height = " + difference + "px";
    fill("#2faff3");
    textSize(difference);
    text('b0B', 200, 250);

}

function modelLoaded() {
    console.log('PoseNet is Initialized.')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

    LeftWristx = results[0].pose.leftWrist.x;
    RightWristx = results[0].pose.rightWrist.x;
    difference = floor(LeftWristx - RightWristx);
    console.log("LeftWristx = " + LeftWristx + " RightWristx = " + RightWristx + " difference = " + difference);
    }
}


