function initialize(){
	let circleContainer = document.querySelector(".circleContainer");
	for(let i=0; i<12; i++){
		circleContainer.innerHTML += `<div id="circle" class="div-${i}"></div>`;
		changeCircle(i);
		}
}
function changeCircle(index){
		const top = Math.random() * 100;
		const left = Math.random() * 100;
		const divX = document.querySelector(`.div-${index}`);
		divX.style.top=`${top}%`;
		divX.style.left=`${left}%`;
		const height= Math.random() * 400;
		const width= Math.random() * 400;
		divX.style.height=`${height}px`;
		divX.style.width=`${height}px`;
		divX.innerHTML=Math.floor(height);



		
	}
