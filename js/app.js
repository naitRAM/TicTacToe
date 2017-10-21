
document.addEventListener("DOMContentLoaded", function(event){

function computerPlays () {
	if (endGame === false) {
	turn = "O";
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
	checkCrosses("100%");
	turn = "X";
	}
}
document.getElementsByTagName("button")[0].addEventListener('click', newGame);

var turn;
var endGame;

function newGame() {
	resetTiles();
	makeAllClickable();
	turn = "X";
	endGame = false;
}

newGame();


function resetTiles() {
	for (var i=1; i<10; i++) {
	document.getElementById("tile"+i).style.backgroundPosition = "";
	document.getElementById("tile"+i).style.backgroundColor = "";
	} 
}

function makeAllClickable(){
	for (var i=1; i<10; i++) {
	document.getElementById("tile"+i).addEventListener('click', changeTile);	
	} 
}

function changeTile() {
	if (turn==="X"){
		this.style.backgroundPositionY = "top";
		checkRows("0%");
		checkCols("0%");
		checkCrosses("0%");
		this.removeEventListener('click', changeTile);
		computerPlays();
	}
	// else {
	// 	this.style.backgroundPositionY = "bottom";
	// 	checkRows("100%");
	// 	checkCols("100%");
	// 	checkCrosses("100%");
	// 	turn = "X";
	// 	this.removeEventListener('click', changeTile);
	// }
}

function checkRow(rowNum, symbol){
	var count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName(rowNum)[i].style.backgroundPositionY === symbol){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName(rowNum)[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		endGame = true;
		}
	}
}

function checkCol(colNum, symbol){
	var count = 0;
	for (var i=0; i<3; i++) {
	if (document.getElementsByClassName(colNum)[i].style.backgroundPositionY === symbol){
	count++;
	}
	}
	if (count===3) {
		for (var i=0; i<3; i++) {
		document.getElementsByClassName(colNum)[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		endGame = true;
		}
	}
}

function checkCross(crossNum, symbol){
	var count=0;
	for (var i=0; i<3; i++) {
		if (document.getElementsByClassName(crossNum)[i].style.backgroundPositionY===symbol){
			count++;
		}
	}
	if (count===3){
		for (var i=0; i<3; i++) {
		document.getElementsByClassName(crossNum)[i].style.backgroundColor = "pink";
		makeAllUnclickable();
		endGame = true;
		}
	}
}

function checkRows(symbol) {
	checkRow("row1", symbol);
	checkRow("row2", symbol);
	checkRow("row3", symbol);
}

function checkCols(symbol) {
	checkCol("col1", symbol);
	checkCol("col2", symbol);
	checkCol("col3", symbol);
}

function checkCrosses(symbol) {
	checkCross("cross1", symbol);
	checkCross("cross2", symbol);
}

function makeAllUnclickable(){
	for (var i=1; i<10; i++) {
	document.getElementById("tile"+i).removeEventListener('click', changeTile);	
	} 
}

});
