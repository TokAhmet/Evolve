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

function loxy(){

	window.location.href = "http://loxy.no";

}

function skane(){

	window.location.href = "http://skanetrafiken.se";

}

function mq(){

	window.location.href = "http://mq.se";

}

function gevalia(){

	window.location.href = "http://gevalia.se";

}

function tele2(){

	window.location.href = "http://tele2.se";

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
