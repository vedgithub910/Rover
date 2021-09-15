canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverW=100;
roverH=100;
roverX=10;
roverY=10;

roverimg="rover.png"
imgarray=[
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg"
];
elon=Math.floor(Math.random()*4);
bgimg= imgarray[elon];
function add(){
bgi=new Image();
bgi.onload=uploadbg;
bgi.src=bgimg;
roveri=new Image();
roveri.onload=uploadrover;
roveri.src=roverimg;
}

function uploadbg(){
ctx.drawImage(bgi,0,0,canvas.width,canvas.height);
}

function uploadrover(){
ctx.drawImage(roveri,roverX,roverY,roverW,roverH);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
if(keypress=='38')
{
    up();
    console.log("up");
    
}
if(keypress=='40'){
down();
console.log("down")

}
if(keypress=='37'){
    left();
    console.log("left")
    
    }
    if(keypress=='39'){
        right();
        console.log("right")
        
        }
    }
    function up(){
if(roverY>=0){
roverY=roverY-10;
uploadbg();
uploadrover();
}
}

function down(){
    if(roverY<=500){
    roverY=roverY+10;
    uploadbg();
    uploadrover();
    }
    }
    function left(){
if(roverX>=0){
roverX=roverX-10;
uploadbg();
uploadrover();
}
 }
 function right(){
if(roverX<=700){
roverX=roverX+10;
uploadbg();
uploadrover();
}
 }