/* @flow */

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function framtiden(){

	window.location.href = "http://framtiden.se";

}

function evolveText () {

	var evolve = document.getElementById("text").className = "omosstext";
	var vision = document.getElementById("text2").className = "hide";
	var plattform = document.getElementById("text3").className = "hide";
}

function visionText () {

	var evolve = document.getElementById("text").className = "hide";
	var vision = document.getElementById("text2").className = "omosstext";
	var plattform = document.getElementById("text3").className = "hide";
}

function plattformText () {

	var evolve = document.getElementById("text").className = "hide";
	var vision = document.getElementById("text2").className = "hide";
	var plattform = document.getElementById("text3").className = "omosstext ";
}
