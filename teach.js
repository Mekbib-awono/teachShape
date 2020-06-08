//alert("HELLO FROM APP.JS!");
var pics = [
        "img/zoe.jpg",
        "img/square.jpg",
        "img/rectangle.jpg",
        "img/triangle.jpg",
        "img/circle.jpg",
        "img/diamond.jpg",
        "img/hexagon.jpg"
        
   ];

var zozo = document.querySelector("button");
var img = document.querySelector("img"); 
var counter = 1;

zozo.addEventListener("click", function(){
	if(counter === 7){
		 counter = 0;
    }

	img.src = pics[counter]
    counter = counter + 1;  
});