var last_position_of_x,last_position_of_y;
var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
var width_of_line=1;

canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseevent="mouseUp"
}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseevent="mouseLeave"
}

canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouseevent="mouseDown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
}

canvas.addEventListener("mousemove",my_mouse_move)
function my_mouse_move(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
}
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}

    canvas.addEventListener("touchstart",touch_start);
function touch_start(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",touch_move)
function touch_move(e){
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
        
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}