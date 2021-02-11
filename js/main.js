

var gElCanvas;
var gCtx;
const elGallery = document.querySelector('.column')
const textBox = document.getElementById('textBox')

function clearCanvas() {

    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

}

const imgArray = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg",
    "./img/10.jpg",
    "./img/11.jpg",
    "./img/12.jpg",
    "./img/13.jpg",
    "./img/14.jpg",
    "./img/15.jpg",
    "./img/16.jpg",
    "./img/17.jpg",
    "./img/18.jpg",
    "./img/19.jpg"
]

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    for (let i = 0; i < imgArray.length; i++) {

        elGallery.innerHTML += '<img widht="278px" height="353px" src="' + imgArray[i] + '" onclick="drawImg(this.src)">'
    }
    if (elGallery.style.display === "block") {
        gElCanvas.style.display = "none";
        document.querySelector('.btn-group').style.display = "none";
    } else {
        gElCanvas.style.display = "none";
    }

}

function drawImg(elImg) {
    const img = new Image()
    img.src = elImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    gElCanvas.style.display = "block";
    elGallery.style.display = "none"
    document.querySelector('.btn-group').style.display = "block";

}

function galleryOn() {
    const elGallery = document.querySelector('.column')
    elGallery.style.display = "block"
    gElCanvas.style.display = "none";
    document.querySelector('.btn-group').style.display = "none";



}



function drawText(){
    var ctx = gElCanvas.getContext("2d");
   
    ctx.font = "20px Georgia";
    ctx.fillText(textBox.value, 10, 50);
    textBox.value=""

    
    // ctx.font = "30px Verdana";
    // Create gradient
    // var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    // gradient.addColorStop("0", "magenta");
    // gradient.addColorStop("0.5", "blue");
    // gradient.addColorStop("1.0", "red");
    

    
}


















































