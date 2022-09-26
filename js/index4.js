const receipt4 = document.querySelector(".receipt4");
const button4 = document.querySelector(".button4");

const toggleReceipt4 = () => {
	receipt4.classList.toggle("active");

	if (receipt4.classList.contains("active")) {
		button4.innerHTML = "校园生活";
	} 
	else {
		button4.innerHTML = "展开";
	}
};

button4.addEventListener("click", toggleReceipt4);
