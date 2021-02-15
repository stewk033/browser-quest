
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const img = document.getElementById('source');
const img1 = document.getElementById('source1');

window.onload = function() {
    // set canvas to max width/height
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    // add image to canvas
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    // context.clearRect(100, 100, 50, 50)

    // let flag = false

    // setInterval(() => {
    //     if (flag) {
    //         context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    //         context.fillText("Browser Quest", 10, 50);
    //         flag = false
    //     } else {
    //         context.drawImage(img1, 100, 100, 50, 50)
    //         flag = true
    //     }
    // }, 175);


    // add title to canvas
    context.font = "60px Luminari";
    context.fillStyle = "white";
    context.fillText("Browser Quest", 10, 50);
}

window.onresize = function() {
    // set canvas to adjust with screen size
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
    context.font = "60px Luminari";
    context.fillStyle = "white";
    context.fillText("Browser Quest", 10, 50)
}

