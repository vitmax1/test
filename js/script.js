	/// adaptive-menu
	const navSlide = () => {
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.nav-links');
		const navSearch = document.querySelector('.nav-search');
		const navGeo = document.querySelector('.nav-geo');
		const body = document.querySelector('body');
		burger.addEventListener('click', () => {
			// Toggle nav
			navSearch.classList.toggle('no-show');
			navGeo.classList.toggle('no-show');
			nav.classList.toggle('active');
			burger.classList.toggle('toggle');
			body.classList.toggle('overflow');
		});
	}
	navSlide();
	console.log(9679)

	//sliders
	let swiper = new Swiper(".about-slider-wrap", {
		slidesPerView: 1,
		// spaceBetween: 30,
		loop: true,
		// grabCursor: true,
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
		// breakpoints: {
		// 	// when window width is >= 320px
		// 	1024: {
		// 		slidesPerView: 'auto',
		// 	},
		// }
	});
	let swiperOpinion = new Swiper(".opinion-slider", {
		slidesPerView: 1,
		loop: true,
		grabCursor: true,
		autoplay: {
			delay: 2000,
		},
		pagination: {
			el: ".opinion-pagination",
			clickable: true,
		},
		
	});

	


