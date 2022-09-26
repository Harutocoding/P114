noseX=0;
noseY=0;

function preload(){
    Hat =loadImage('https://i.postimg.cc/d34L2W8P/2d0ce6884beaba5e68ba0dd07699a1ba-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet IS Intialized');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(Hat, noseX-70, noseY-100, 150, 150);
}

function take_snapshot(){
    save('myFilterImage.png');
}