const receipt2 = document.querySelector(".receipt2");
const button2 = document.querySelector(".button2");

const toggleReceipt2 = () => {
	receipt2.classList.toggle("active");

	if (receipt2.classList.contains("active")) {
		button2.innerHTML = "校园生活";
	} 
	else {
		button2.innerHTML = "展开";
	}
};

button2.addEventListener("click", toggleReceipt2);
