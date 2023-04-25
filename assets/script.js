const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tout formats <span>en boutique et en ligne</span>"
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
const banner = document.querySelector("#banner");
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



const getSlide = (numImage) => {
	const image = banner.querySelector('.banner-img');
	if(!image){
		banner.insertAdjacentHTML('beforeend', `<img class="banner-img" src="./assets/images/slideshow/`
		+slides[numImage].image+
		`" alt="Banner Print-it"><p>`
		+slides[numImage].tagLine+
		`</p>`);
	}else{
		image.setAttribute("src", `./assets/images/slideshow/${slides[numImage].image}`);
		banner.querySelector('p').innerHTML = slides[numImage].tagLine;
	}
	
	
}


document.body.onload = getSlide(numImage);
document.body.onload = addDots(numImage);

btnPrev.addEventListener("click",  ()=> {
	if(numImage === 0){
		numImage = slides.length -1;
	}else{
		numImage--;
		}
	getSlide(numImage);
	addDots(numImage);
});

btnNext.addEventListener("click", ()=> {
	if(numImage === slides.length - 1){
		numImage = 0;
	}else{
	numImage++;
	}
	getSlide(numImage);
	addDots(numImage);
});