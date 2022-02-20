lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
s1 = "";
s2 = "";
function preload(){
s1 = loadSound("ap.mp3");
s2 = loadSound("s.mp3");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
lwx = results[0].pose.leftWrist.x;
rwx = results[0].pose.rightWrist.x;
lwy = results[0].pose.leftWrist.y;
rwy = results[0].pose.rightWrist.y;
}
}
function draw(){
image(video, 0,0, 600, 500);
}
