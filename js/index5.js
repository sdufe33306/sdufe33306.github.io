const receipt5 = document.querySelector(".receipt5");
const button5 = document.querySelector(".button5");

const toggleReceipt5 = () => {
	receipt5.classList.toggle("active");

	if (receipt5.classList.contains("active")) {
		button5.innerHTML = "校园生活";
	} 
	else {
		button5.innerHTML = "展开";
	}
};

button5.addEventListener("click", toggleReceipt5);
