var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e);
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
 
    mouseEvent="mousedown"
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
   current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
   current_position_of_mouse_y=e.clientY-canvas.offsetTop;
   

if(mouseEvent=="mousedown")
{
    ctx.beginPath();
    ctx.strokStyle=color;
    ctx.lineWidth=width_of_line

    console.log("last position of x and y coordinates= ");
console.log("x = " + last_position_of_x + "y = " + current_position_of_mouse_y)
ctx.moveto(current_position_of_mouse_x,current_position_of_mouse_y)



console.log("last position of x and y coordinates= ");
console.log("x = " + current_position_of_mouse_x+ "y = " + last_position_of_x)
ctx.moveto(current_position_of_mouse_x,current_position_of_mouse_y)
ctx.stroke();

}


last_position_of_x = current_position_of_mouse_x
last_position_of_y = current_position_of_mouse_y


}