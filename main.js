
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)


    canavs = createCanvas(450, 450);
    canavs.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}