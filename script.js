function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function initialize() {
	let circleC = document.querySelector("#circle-container");
	for (let i = 0; i < 12; i++){
		circleC.innerHTML += `<div id="div-${i}"
		class="circle"><div>`;
		setInterval(function(){
			changeCircle(i);
		},1000);
	}
	
}

function changeCircle(index){
		let top	= parseInt(Math.random() * 100);
		let right = parseInt(Math.random() * 100);
		let divX = document.querySelector(`#div-${index}`);
		divX.style.top = `${top}%`;
		divX.style.right = `${right}%`;
		let height = getRandomIntInclusive(30,200);
		divX.style.height = `${height}px`;
		divX.style.width = `${height}px`;
		divX.innerHTML = height;
		divX.style["font-size"] = `${height/3}px`;
		let red = parseInt(Math.random() * 256);
		let green = parseInt(Math.random() * 256);
		let blue = parseInt(Math.random() * 256);
		let color = `rgb(${red},${green},${blue})`;
		divX.style.color = color;
		divX.style["border-color"] = color;
		divX.style["border-width"] = `${height/30}px`
}