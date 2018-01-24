

// Mobile nav

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("nav-span").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("nav-span").style.display = "block";
}

//Länka till sidorna när man klickar på button

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

// ändra Omoss texten när man klickar på nav'en

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

// ändra bild på tjänstersidan

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
    tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = "tablink";
    }

	document.getElementById(pageName).style.display = "block";
	elmnt.className += " tablinkactive";
}

window.onload = function()
{
	var beforeButton = document.getElementById("BeforeButton");
	if (beforeButton != null)
	{
		beforeButton.click();		
	}
};

// Stäng popup-modellen

function closeModal () {
	modal.style.display = "none";
	modal2.style.display = "none";
	modal3.style.display = "none";
	modal4.style.display = "none";
	modal5.style.display = "none";
	modal6.style.display = "none";
}

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
    tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = "tablink";
    }

	document.getElementById(pageName).style.display = "block";
	elmnt.className += " tablinkactive";
}

window.onload = function()
{
	document.getElementById("BeforeButton").click();
}

var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');

var popup = document.getElementById("framtiden");
var popup2 = document.getElementById("loxy");
var popup3 = document.getElementById("skane");
var popup4 = document.getElementById("mq");
var popup5 = document.getElementById("gevalia");
var popup6 = document.getElementById("tele2");

// Visa popup-modellen när man klickar på företagen
 
popup.onclick = function() {
    modal.style.display = "block";
};
popup2.onclick = function() {
    modal2.style.display = "block";
};
popup3.onclick = function() {
    modal3.style.display = "block";
};
popup4.onclick = function() {
    modal4.style.display = "block";
};
popup5.onclick = function() {
    modal5.style.display = "block";
};
popup6.onclick = function() {
    modal6.style.display = "block";
};


// Stäng modellen när man klickar utanför boxen

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == modal2) {
        modal2.style.display = "none";
    }

    if (event.target == modal3) {
    	modal3.style.display = "none";
    }

    if (event.target == modal4) {
    	modal4.style.display = "none";
    }

    if (event.target == modal5) {
    	modal5.style.display = "none";
    }

    if (event.target == modal6) {
   	 	modal6.style.display = "none";
    }
};

<<<<<<< HEAD
=======
// GoogleMap positionen 

function initMap() {
	  var uluru = {lat: 59.345283, lng: 18.0223358};
	  var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: uluru
	  });
	  var marker = new google.maps.Marker({
		position: uluru,
		map: map
	  });
}
>>>>>>> master
