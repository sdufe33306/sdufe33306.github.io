const receipt6 = document.querySelector(".receipt6");
const button6 = document.querySelector(".button6");

const toggleReceipt6 = () => {
	receipt6.classList.toggle("active");

	if (receipt6.classList.contains("active")) {
		button6.innerHTML = "校园生活";
	} 
	else {
		button6.innerHTML = "展开";
	}
};

button6.addEventListener("click", toggleReceipt6);
