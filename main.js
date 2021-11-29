canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


colour="cyan";
width_line=5;
var mouseEvent="empty";


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_postion_x=e.clientX-canvas.offsetLeft;
    current_postion_Y=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_line;
        ctx.arc(current_postion_x,current_postion_Y,40,0,2*Math.PI);
        ctx.stroke();
    }
}
