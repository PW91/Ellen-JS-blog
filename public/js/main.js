console.log("jest super");

const headerEl = document.getElementsByClassName("header")[0];

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		headerEl.classList.add("scrolled");
	} else {
		headerEl.classList.remove("scrolled");
	}
});
