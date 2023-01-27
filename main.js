function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
   video.hide();  
posenet=ml5.poseNet(video,loaded);
posenet.on("pose",poselol);
}
function draw(){
image(video,0,0,300,300);
}
function takesnap(){
    save("you are a spider.png");

}
function loaded(){
    console.log("posenet initialized");
}
function poselol(result){
if(result.length>0)
{
    console.log(result);
    console.log("nose x= "+result[0].pose.nose.x);
    console.log("nose y= "+result[0].pose.nose.y);
}
}