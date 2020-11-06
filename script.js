var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var oribg = getComputedStyle(body).getPropertyValue("background-image");
var btn = document.createElement("button");
btn.appendChild(document.createTextNode("Click to generate a random color gradient"));
var lasttag = document.querySelector("script");
body.insertBefore(btn, lasttag);

css.textContent = oribg + ";";

color1.value = "#FF0000";
color2.value= "#FFFF00";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomColor() {
	var rcolor1 = Math.floor(Math.random() * 256);
	var rcolor2 = Math.floor(Math.random() * 256);
	var gcolor1 = Math.floor(Math.random() * 256);
	var gcolor2 = Math.floor(Math.random() * 256);
	var bcolor1 = Math.floor(Math.random() * 256);
	var bcolor2 = Math.floor(Math.random() * 256);
	body.style.background = `linear-gradient(to right, rgb(${rcolor1}, ${gcolor1}, ${bcolor1}), rgb(${rcolor2}, ${gcolor2}, ${bcolor2}))`;

}

btn.addEventListener("click", randomColor)