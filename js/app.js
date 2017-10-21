
document.addEventListener("DOMContentLoaded", function(event){

function computerPlays () {
	var tileList=[];
	for (var i=1; i<10; i++){ 
		if (document.getElementById("tile"+i).style.backgroundPositionY === "") {
			tileList.push(i);
		}
	}
	var randomTile = tileList[Math.floor(Math.random()*tileList.length)];
	var pickedTile = document.getElementById("tile"+randomTile);
	pickedTile.style.backgroundPositionY="100%";
	pickedTile.removeEventListener('click', changeTile);
	checkRows("100%");
	checkCols("100%");
	checkCross("100%");
	turn = "X";
}



var turn = "X";

makeAllClickable();

function changeTile() {
	if (turn==="X"){
		this.style.backgroundPositionY = "top";
		checkRows("0%");
		checkCols("0%");
		checkCross("0%");
		turn = "O";
		this.removeEventListener('click', changeTile);
		computerPlays();
	}
	// else {
	// 	this.style.backgroundPositionY = "bottom";
	// 	checkRows("100%");
	// 	checkCols("100%");
	// 	checkCross("100%");
	// 	turn = "X";
	// 	this.removeEventListener('click', changeTile);
	// }
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

function checkRows(symbol) {
	var count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("row1")[i].style.backgroundPositionY === symbol){
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
	if (document.getElementsByClassName("row2")[i].style.backgroundPositionY === symbol){
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
	if (document.getElementsByClassName("row3")[i].style.backgroundPositionY === symbol){
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

function checkCols(symbol) {
	var count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("col1")[i].style.backgroundPositionY === symbol){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("col1")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
	count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("col2")[i].style.backgroundPositionY === symbol){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("col2")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
	count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName("col3")[i].style.backgroundPositionY === symbol){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("col3")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
}

function checkCross(symbol) {
	var count=0;
	for (var i=0; i<3; i++) {
		if (document.getElementsByClassName("cross1")[i].style.backgroundPositionY===symbol){
			count++;
		}
	}
	if (count===3){
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("cross1")[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		}
	}
	count=0;
	for (var i=0; i<3; i++) {
		if (document.getElementsByClassName("cross2")[i].style.backgroundPositionY===symbol){
			count++;
	}
	}
	if (count===3){
		for (var i=0; i<3; i++) {
		document.getElementsByClassName("cross2")[i].style.backgroundColor = "pink";
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
