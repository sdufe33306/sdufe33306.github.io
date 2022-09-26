const receipt1 = document.querySelector(".receipt1");
const button1 = document.querySelector(".button1");

const toggleReceipt1 = () => {
	receipt1.classList.toggle("active");

	if (receipt1.classList.contains("active")) {
		button1.innerHTML = "校园生活";
	} 
	else {
		button1.innerHTML = "展开";
	}
};

button1.addEventListener("click", toggleReceipt1);
