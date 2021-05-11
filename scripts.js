// menu////////////////////////////////////
jQuery('document').ready(function($){
var menuBtn = $('.menu-icon'), 
	menu = $('#menu ul'),
	barr = $('.fa-align-justify');
	
	menuBtn.click(function(){
		if(menu.hasClass('show')){
			menu.removeClass('show');
		} else{
			menu.addClass('show');
		}
		if(barr.hasClass('show')){
			barr.removeClass('show');
		} else{
			barr.addClass('show');
		}
		
	});
});
/*gotop//////////////////////////////*/
	window.onscroll = function(){
		if(document.documentElement.scrollTop > 100){
		document.querySelector('.go-top-container')
			.classList.add('sal');
		}else{
		document.querySelector('.go-top-container')
			.classList.remove('sal');	
		}
	}
$(document).ready(function(){
	$('.go-top-button').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		});
	});
});
/*slaider//////////////////////////////*/

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll("div.slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
	let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
	slider.style.marginLeft = "-100%";
}, 500);
}
function Prev(){
	let sliderSection = document.querySelectorAll("div.slider-section");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
	slider.style.marginLeft = "-100%";
}, 500);
}

btnRight.addEventListener('click', function(){
	Next();
});

btnLeft.addEventListener('click', function(){
	Prev();
});

setInterval(function(){
	Next();
}, 5000);