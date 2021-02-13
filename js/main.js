'use strict'

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

]

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)

    gElCanvas.addEventListener('mousedown', onDown)

    gElCanvas.addEventListener('mouseup', onUp)
}

let selectedCanvasElement=null

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isCirlceClicked(pos)) return
    gCtx.isDragging = true
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    if (gCtx.isDragging) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y

        gCtx.pos.x += dx
        gCtx.pos.y += dy

        gStartPos = pos
        renderCanvas()
        onShowText() 
    }
}

function onUp() {
    gCtx.isDragging = false
    document.body.style.cursor = 'grab'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}



function init() {
    gElCanvas = document.getElementById('my-canvas')
    addMouseListeners()
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
    document.querySelector('.btn-group').style.display = "table";
    document.querySelector('.about-container').style.display = "none";
}

function galleryOn() {
    const elGallery = document.querySelector('.column')
    elGallery.style.display = "block"
    gElCanvas.style.display = "none";
    document.querySelector('.btn-group').style.display = "none";
    document.querySelector('.about-container').style.display = "flex";
    
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'Meme Make'
}

 function drawText(){
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "20px Georgia";
    ctx.fillText(textBox.value, 10, 50);
    textBox.value=""
}

function saveCtx(){
    let a = gCtx.save()
    console.log(a);
    
}

function setText(){
    textBox.value=""
}
 
function onShowText() {
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "42px Georgia";
    const t = ctx.fillText(textBox.value, 78, 65);
    
}

function increaseFont() {
    
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "90px Georgia";
    ctx.fillText(textBox.value, 78, 65);
    textBox.value += ""
   onShowText()
}

function decreaseFont() {
  
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "10px Georgia";
    ctx.fillText(textBox.value, 78, 65);
    textBox.value += ""
    onShowText()
}

function drawE1() {
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "40px Georgia";
    ctx.fillText(textBox.value, 78, 65);
    textBox.value += "🤦‍♀️"

}

function drawE2() {
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "40px Georgia";
    ctx.fillText(textBox.value, 78, 65);
    textBox.value += "🍌"

}
function drawE3() {
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "40px Georgia";
    ctx.fillText(textBox.value, 78, 65);
    textBox.value += "❤️"

}
function drawE4() {
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "40px Georgia";
    ctx.fillText(textBox.value, 78, 65);
    textBox.value += "🙄"

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function alignLeft(){
    
 textBox.value = ""
    var ctx = gElCanvas.getContext("2d");
    ctx.fillText(textBox.value, 78, 65);  
    onShowText()
       
}

function centerText(){
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "42px Georgia";
    const t = ctx.fillText(textBox.value, 78, 65)
    ctx.textAlign ="center";
    onShowText()
}

function alignRight(){

}











