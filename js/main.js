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
    document.querySelector('.btn-group').style.display = "table";
}

function galleryOn() {
    const elGallery = document.querySelector('.column')
    elGallery.style.display = "block"
    gElCanvas.style.display = "none";
    document.querySelector('.btn-group').style.display = "none";
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
 
function onShowText() {
    var ctx = gElCanvas.getContext("2d");
    ctx.font = "42px Georgia";
    ctx.fillText(textBox.value, 78, 65);
    textBox.value += ""

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
    ctx.font = "8px Georgia";
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
    
    if (textBox.value = "") {
        textBox.value==alignRight; 
    }
  
      
}

function centerText(){

}

function alignRight(){

}












