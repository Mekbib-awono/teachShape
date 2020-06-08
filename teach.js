//alert("HELLO FROM APP.JS!");
var shapes = [
    {
        img: 'img/zoe.jpg',
        audio: 'audio/zoe.ogg'
    },
    {
        img: 'img/square.jpg',
        audio: 'audio/square.ogg'
    },
    {
        img: 'img/rectangle.jpg',
        audio: 'audio/rectangle.ogg'
    },
    {
        img: 'img/triangle.jpg',
        audio: 'audio/triangle.ogg'
    },
    {
        img: 'img/circle.jpg',
        audio: 'audio/circle.ogg'
    },
    {
        img: 'img/diamond.jpg',
        audio: 'audio/diamond.ogg'
    },
    {
        img: 'img/hexagon.jpg',
        audio: 'audio/hexagon.ogg'
    },
]

var zozo = document.querySelector("button");
var img = document.querySelector("img"); 
var audioSource = document.querySelector("audio > source")
var audio = document.querySelector("audio")


var counter = 1;

zozo.addEventListener("click", function(){
    if(counter === 7){
         counter = 0;
    }

    img.src = shapes[counter].img;
    audioSource.src = shapes[counter].audio;
    audio.load();
    counter = counter + 1;  
});