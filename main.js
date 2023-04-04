let btns =document.querySelector("button");
btn.classList.add("toggle-btn");
let pP=document.querySelector("p");


btn.addEventListener("click" ,togg);

function togg(){
	pP.classList.toggle("content");
	console.log("hahha");
}