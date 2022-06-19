nosex=0
nosey=0
function preload(){
clownnose=loadImage("clown nose.png")
}
function setup(){
canvas = createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotResult)
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotResult(results){
if (results.length>0) {
    console.log(results)
    console.log("nosx=" +results[0].pose.nose.x) 
    console.log("nosy=" +results[0].pose.nose.y) 
    nosex= results[0].pose.nose.x
    nosey=results[0].pose.nose.y
}
}
function draw(){
    image(video,0,0,300,300)
    image(clownnose,nosex,nosey,30,30)
    fill("red")
    circle (nosex,nosey,30)
    }