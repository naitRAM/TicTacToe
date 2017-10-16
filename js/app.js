
document.addEventListener("DOMContentLoaded", function(event){

var turn = "X";

makeAllClickable();

function changeTile() {
	if (turn==="X"){
		this.style.backgroundPositionY = "top";
		checkRowsForX();
		turn = "O";
		this.removeEventListener('click', changeTile);
	}
	else {
		this.style.backgroundPositionY = "bottom";
		checkRowsForO();
		turn = "X";
		this.removeEventListener('click', changeTile);
	}
}

function makeAllClickable(){
	for (var i=1; i<10; i++) {
	document.getElementById("tile"+i).addEventListener('click', changeTile);	
	} 
}

function makeAllUnclickable(){
	for (var i=1; i<10; i++) {
	document.getElementById("tile"+i).removeEventListener('click', changeTile);	
	} 
}

function checkRowsForX() {
	var count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row1")[i].style.backgroundPositionY === "0%"){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("row1")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
	count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row2")[i].style.backgroundPositionY === "0%"){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("row2")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
	count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row3")[i].style.backgroundPositionY === "0%"){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("row3")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
}

function checkRowsForO() {
	var count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row1")[i].style.backgroundPositionY === "100%"){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("row1")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
	count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row2")[i].style.backgroundPositionY === "100%"){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("row2")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
	count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row3")[i].style.backgroundPositionY === "100%"){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("row3")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
}

function resetTiles() {
	for (var i=1; i<10; i++) {
	document.getElementById("tile"+i).style.backgroundPosition = "";
	document.getElementById("tile"+i).style.backgroundColor = "";
	} 
}



document.getElementsByTagName("button")[0].addEventListener('click', function(){
	resetTiles();
	makeAllClickable();
	turn = "X";
})

});
