const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const btnPrev = document.querySelector(".arrow_left");
const btnNext = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const image = document.getElementsByClassName("banner-img").item(0);
const image_text = document.getElementById("banner").getElementsByTagName('p').item(0);
let str = '';
let number = 0;
document.body.onload = addDots;

// Add dots
function addDots(){
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("div");
		if(i == 0){
		dot.classList.add("dot");
		dot.classList.add("dot_selected");
		}else{
		dot.classList.add("dot");
		}
		dots.insertAdjacentElement("beforeend",dot);
	  }

}

// Slide function
function getSlide(Dir){
	number = number + Dir;
	//console.log("Number " + number);
	if(number < 0){
		number = slides.length - 1;
	}
	if(number >= slides.length){
		number = 0;
	}
	// Change image
	image.src= "./assets/images/slideshow/" + slides[number].image;
	// Change text
	image_text.innerHTML = slides[number].tagLine;

	//reset all dots
	for (let i = 0; i < slides.length; i++) {
		let dots_load = dots.getElementsByClassName('dot').item(i);
		dots_load.classList.remove('dot_selected');
	  }
	// Add selected dot
	  let dots_load = dots.getElementsByClassName('dot').item(number);
	  dots_load.classList.add('dot_selected');
	//console.log(slides[number].image);
}

btnPrev.addEventListener("click", function () {
	getSlide(-1);
});

btnNext.addEventListener("click", function () {
	getSlide(+1);
});
