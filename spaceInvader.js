"use strict";


drawSpacelnvader();

function drawSpacelnvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 300);
    context.lineTo(300, 300);
    context.lineTo(300, 0);
    context.fill();

    context.fillStyle = "#00ff00";

    context.beginPath();
    context.moveTo(125, 25);
    context.lineTo(175, 25);
    context.lineTo(175, 75);
    context.lineTo(225, 75);
    context.lineTo(225, 125);
    context.lineTo(175, 125);
    context.lineTo(175, 175);
    context.lineTo(125, 175);
    context.lineTo(125, 125);
    context.lineTo(75, 125);
    context.lineTo(75, 75);
    context.lineTo(125, 75);
    context.stroke();
    context.fill();

    context.beginPath();

    context.moveTo(25, 175);
    context.lineTo(25, 275);
    context.lineTo(125, 275);
    context.lineTo(125, 175);
    context.stroke();
    context.fill();


    context.beginPath();
    context.moveTo(175, 175);
    context.lineTo(175, 275);
    context.lineTo(275, 275);
    context.lineTo(275, 175);
    context.stroke();
    context.fill();

}