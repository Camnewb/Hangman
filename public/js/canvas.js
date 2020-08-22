var canvas = document.getElementById("main-canvas");
var ctx = canvas.getContext("2d");
var height = 400;
var width = 600;
canvas.height = 400;

function drawHangman(index) {
    width = window.innerWidth - 20;
    canvas.width = width;

    //console.log("Width: " + width + " Height: " + height);
    
    ctx.strokeStyle ="#ffffff";
    ctx.globalAlpha = 1;
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    //Lower left diagonal brace
    ctx.moveTo(width / 2, height - 60);
    ctx.lineTo(width / 2 - 60, height - 15);
    //Bottom horizontal brace
    ctx.moveTo(width / 2 - 100, height - 15);
    ctx.lineTo(width / 2 + 100, height - 15);
    //Lower right diagonal brace
    ctx.moveTo(width / 2 + 60, height - 15);
    ctx.lineTo(width / 2, height - 60);
    //Vertical post
    ctx.moveTo(width / 2, height - 15);
    ctx.lineTo(width / 2, height - 350);
    //Upper diagonal brace
    ctx.moveTo(width / 2, height - 300);
    ctx.lineTo(width / 2 + 50, height - 350);
    //Upper horizontal brace
    ctx.moveTo(width / 2, height - 350);
    ctx.lineTo(width / 2 + 120, height - 350);
    ctx.stroke();
    //String
    ctx.lineWidth = 4;
    ctx.moveTo(width / 2 + 110, height - 350)
    ctx.lineTo(width / 2 + 110, height - 270);
    ctx.stroke();
    if (index >= 1) {
        //ctx.strokeStyle = "#a8a8a8";
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.arc(width / 2 + 110, height - 245, 25, 0, Math.PI * 2);
        ctx.closePath();
    }
    if (index >= 2) {
        ctx.moveTo(width / 2 + 110, height - 220);
        ctx.lineTo(width / 2 + 110, height - 135);
    }
    if (index >= 3) {
        ctx.moveTo(width / 2 + 110, height - 220);
        ctx.lineTo(width / 2 + 110, height - 135);
    }
    if (index >= 4) {
        ctx.moveTo(width / 2 + 110, height - 200);
        ctx.lineTo(width / 2 + 80, height - 160);
    }
    if (index >= 5) {
        ctx.moveTo(width / 2 + 110, height - 200);
        ctx.lineTo(width / 2 + 140, height - 160);
    }
    if (index >= 6) {
        ctx.moveTo(width / 2 + 110, height - 137);
        ctx.lineTo(width / 2 + 80, height - 90);
    }
    if (index >= 7) {
        ctx.moveTo(width / 2 + 110, height - 137);
        ctx.lineTo(width / 2 + 140, height - 90);
    }
    ctx.stroke();
}