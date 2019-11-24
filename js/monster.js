var canvas, ctx;
var monsterX = 100, monsterY = 100, monsterAngle = 0;
var incrementX = 0;
var incrementY = 0;

function init() {
    // This function is called after the page is loaded
    // 1 - Get the canvas
    canvas = document.getElementById('myCanvas');
    // 2 - Get the context
    ctx = canvas.getContext('2d');
    // 3 add key listeners to the window element
    window.addEventListener('keydown', handleKeydown, false);
    window.addEventListener('keyup', handleKeyup, false);

    // 4 - start the animation
    requestId = requestAnimationFrame(animationLoop);
}

function handleKeydown(evt) {
    if (evt.keyCode === 37) {
        //left key 
        incrementX = -1;
    } else if (evt.keyCode === 39) {
        // right key
        incrementX = 1;
    } else if (evt.keyCode === 38) {
        // up key
        incrementY = -1;
    } else if (evt.keyCode === 40) {
        // down key
        incrementY = 1;
    }
}

function handleKeyup(evt) {
    incrementX = 0;
    incrementY = 0;
}


function animationLoop() {
    // 1 - Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2 Draw
    drawMonster(monsterX, monsterY, monsterAngle, 'yellow', 'greenyellow');

    // 3 Move
    monsterX += incrementX;
    monsterY += incrementY;

    // call again mainloop after 16.6 ms (60 frames/s)
    requestId = requestAnimationFrame(animationLoop);
}
function drawMonster(x, y, angle, headColor, eyeColor) {
    // GOOD PRACTICE : SAVE CONTEXT AND RESTORE IT AT THE END
    ctx.save();

    // Moves the coordinate system so that the monster is drawn
    // at position (x, y)
    ctx.translate(x, y);
    ctx.rotate(angle)

    // head
    ctx.fillStyle = headColor;
    ctx.fillRect(0, 0, 200, 200);

    // eyes
    ctx.fillStyle = 'blue';
    ctx.fillRect(35, 30, 30, 30);
    ctx.fillRect(130, 30, 30, 30);

    // interior of eye
    ctx.fillStyle = eyeColor;
    ctx.fillRect(43, 37, 15, 15);
    ctx.fillRect(138, 37, 15, 15);

    // Nose
    //ctx.fillStyle = 'yellow';
    //ctx.fillRect(80, 90, 40, 40);

    // the triangle
    ctx.beginPath();
    ctx.moveTo(100, 80);
    ctx.lineTo(80, 120);
    ctx.lineTo(120, 120);
    ctx.closePath();

    // the fill color
    ctx.fillStyle = "purple";
    ctx.fill();


    // Mouth
    ctx.fillStyle = 'red';
    ctx.fillRect(55, 155, 90, 20);

    //greetings
    ctx.font ="italic 15pt Calibri"
    // stroke color
    ctx.fillStyle = 'blueviolet';
    ctx.fillText('Move me, please?!', 10, 230);
 

    // GOOD PRACTICE !
    ctx.restore();
}
/*
function start() {
    // Start the animation loop, targets 60 frames/s
    requestId = requestAnimationFrame(animationLoop);
}
function stop() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }

}
*/