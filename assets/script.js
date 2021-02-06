
// context.beginPath();
// context.rect(100, 50, 200, 150);
// context.fillStyle = 'blue';
// context.fill();
// context.stroke();

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var img = document.getElementById('source');

    // set canvas to max width/height
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight

    // add image to canvas
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)

    // add title to canvas
    context.font = "30px Arial";
    context.fillText("Browser Quest", 10, 50);
}
