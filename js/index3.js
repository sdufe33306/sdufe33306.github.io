const receipt3 = document.querySelector(".receipt3");
const button3 = document.querySelector(".button3");

const toggleReceipt3 = () => {
	receipt3.classList.toggle("active");

	if (receipt3.classList.contains("active")) {
		button3.innerHTML = "校园生活";
	} 
	else {
		button3.innerHTML = "展开";
	}
};

button3.addEventListener("click", toggleReceipt3);
