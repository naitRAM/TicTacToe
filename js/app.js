
document.addEventListener("DOMContentLoaded", function(event){

var turn = "X";

function changeTile() {
	if (turn==="X"){
		this.style.backgroundPositionY = "top";
		checkRow();
		turn = "O";
		this.removeEventListener('click', changeTile);
	}
	else {
		this.style.backgroundPositionY = "bottom";
		turn = "X";
		this.removeEventListener('click', changeTile);
	}
}

function makeAllClickable(element){
	element.addEventListener('click', changeTile);
}

function makeAllUnclickable(){
	for (var i=1; i<10; i++) {
	document.getElementById("tile"+i).removeEventListener('click', changeTile);	
	} 
}

for (var i=1; i<10; i++) {
	makeAllClickable(document.getElementById("tile"+i));
}

function checkRow() {
	count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row1")[i].style.backgroundPositionY === "0%"){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("row1")[i].style.backgroundColor = "pink";
		}
	}
}

});
