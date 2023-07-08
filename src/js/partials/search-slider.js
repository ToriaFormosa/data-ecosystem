$(document).ready(function () {
	function toggleSearchSlider() {
		const search = document.querySelector(".search"),
				filterBtns = search.querySelectorAll('.search-filters__button'),
				dropdownBtn = search.querySelector('.search-filters__button--dropdown'),
				dropdownLinks = search.querySelectorAll('.search-filters__dropdown a'),
				dropdownBtnText = search.querySelector('.search-filters__button--dropdown span');

		if (!search) {
			return;
		}

		filterBtns.forEach(function (el) {
			el.addEventListener('click', function () {
				filterBtns.forEach(n => n.classList.remove('active'));
				el.classList.add('active');
			})
		});

		dropdownLinks.forEach(function (el) {
			el.addEventListener('click', function () {
				dropdownBtnText.innerText = el.innerText + '...'
			});
		});

		const searchSlider = new Swiper(".search-filters", {
			slidesPerView: "auto",
			breakpoints: {
				768: {
					slidesPerView: "auto",
					enabled: false,
				},
			},
		});
	}

	toggleSearchSlider();
});
