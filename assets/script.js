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
"use strict"
const btnPrev = document.querySelector(".arrow_left");
const btnNext = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const image = document.querySelector("#banner");
let str = '';
let numImage = 0;


const addDots = (numImage) => {
	document.querySelector("#dots").innerHTML = '';
	let i = 0;
	for(slide of slides){
		if(i === numImage){
			dots.insertAdjacentHTML("beforeend",`<div class="dot dot_selected"></div>`);
		}else{
			dots.insertAdjacentHTML("beforeend",`<div class="dot"></div>`);
		}
		i++;
	}
}

const removeSlide = () =>{
	if (image.children.length > 2) {
		image.lastElementChild.remove();
		image.lastElementChild.remove();
	  }
}

const getSlide = (numImage) => {
	image.insertAdjacentHTML('beforeend', `<img class="banner-img" src="./assets/images/slideshow/`
	+slides[numImage].image+
	`" alt="Banner Print-it"><p>`
	+slides[numImage].tagLine+
	`</p>`);
}


document.body.onload = getSlide(0);
document.body.onload = addDots(0);

btnPrev.addEventListener("click",  ()=> {
	if(numImage === 0){
		numImage = slides.length -1;
	}else{
		numImage--;
		}
	removeSlide();
	getSlide(numImage);
	addDots(numImage);
});

btnNext.addEventListener("click", ()=> {
	if(numImage === slides.length - 1){
		numImage = 0;
	}else{
	numImage++;
	}
	removeSlide();
	getSlide(numImage);
	addDots(numImage);
});