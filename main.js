canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
background_image="PARKING~~~~.jpg";
car_image="images.png";
car_x=5;
car_y=225;

function add(){
background_imgTag=new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;
car_imgTag=new Image();
car_imgTag.onload= uploadBackground;
car_imgTag.src= background_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadcar(){
    ctx.drawImage(background_imgTag, car_x, car_y, car.width, car.height)
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(KeyPressed);
if(keyPressed){
console.log("carx, cary")
}
}
