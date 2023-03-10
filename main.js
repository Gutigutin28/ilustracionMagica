    //Crea la variable "mouseEvent" y establécela como “empty”.
    var mouseEvent = "empty";

    //Crea dos variables: "last_position_of_x" y "last_position_of_y".
    var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define dos variables: 'color' y 'width_of_line' y asígnales los valores.
    color = "black";
    width_of_line = 1;

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        //Inicio de actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;  
        //Finaliza actividad adicional

        mouseEvent = "mousedown";
    }

    //Crea la función de detección de evento addEventListener()para mouseup(). 
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e){
        mouseEvent = "mouseup";
    }

    

    //Crea la función de detección de evento addEventListener()para mouseleave(). 
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e){
        mouseEvent = "mouseleave";
    }




    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        if (mouseEvent == "mousedown"){
            ctx.beginPath();
            ctx.strokeStyle= color;
            ctx.lineWidth = width_of_line;

            console.log("Last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);

            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
            ctx.stroke();

        }
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
        }
       


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}