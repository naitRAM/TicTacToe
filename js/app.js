class Tile {
	constructor(name){
		this.name = document.getElementById(name);	
	}
	setX(){
		this.name.style.backgroundPositionY="top";
	}
	setO(){
		this.name.style.backgroundPositionY="bottom";
	}
	reset(){
		this.name.style.backgroundPositionY="center";
	}
}

var tile1 = new Tile("tile1");



document.addEventListener("DOMContentLoaded", function(event){

console.log("hello");

});
