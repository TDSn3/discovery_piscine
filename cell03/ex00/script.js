const cta = document.getElementById("cta");
const body = document.getElementById("body");

cta.addEventListener("click", function() 
{
	body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
})