const headerEl = document.getElementsByClassName("header")[0];

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		headerEl.classList.add("scrolled");
	} else {
		headerEl.classList.remove("scrolled");
	}
});

function openFaqCategory(category) {
	var i;
	var x = document.getElementsByClassName("faq-category");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		//x[i].classList.remove("active");
	}
	document.getElementById(category).style.display = "block";
}

const faqCategoryEls = document.getElementsByClassName("category");

if (faqCategoryEls.length) {
	const costam = Array.from(faqCategoryEls);
	costam.forEach(cos => {
		cos.addEventListener("click", () => {
			costam.forEach(q => {
				q.classList.remove("active");
			});

			cos.classList.add("active");

			var x = document.getElementsByClassName("faq-category");
			for (i = 0; i < x.length; i++) {
				x[i].classList.remove("active");
			}

			document.getElementById(cos.dataset.category).classList.add("active");
		});
	});
}

const sliderEl = document.getElementsByClassName("hero-slider")[0];

if (sliderEl) {
	const slides = sliderEl.getElementsByClassName("slide");
	let currentSlideIndex = 0;

	setInterval(function() {
		slides[currentSlideIndex].classList.remove("active");

		if (currentSlideIndex < 3) {
			currentSlideIndex++;
		} else {
			currentSlideIndex = 0;
		}

		slides[currentSlideIndex].classList.add("active");
	}, 5000);
}

const singleQuestionEls = document.getElementsByClassName("single-question");

if (singleQuestionEls.length) {
	const costam = Array.from(singleQuestionEls);
	costam.forEach(function(question) {
		question.addEventListener("click", () => {
			costam.forEach(q => {
				q.classList.remove("active");
			});

			question.classList.add("active");
		});
	});
}
