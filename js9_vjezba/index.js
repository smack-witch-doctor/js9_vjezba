//dom manipulacije
// window (BOM)

//window.document.getElementById("header");
//is the same as:
//document.getElementById("header")
//----------------------------------------------------
//document.getElementById("demo").innerHTML =
//"Screen Width: " + screen.width;
//-------------------------------------------------------
/* napravi button za vracanje na prijasnji link: HISTORY
Create a back button on a page:
<html>
<head>
<script>
function goBack() {
  window.history.back()
}
</script>
</head>
<body>

<input type="button" value="Back" onclick="goBack()">

</body>
</html>*/
//---------------------------------------------------------
//window.confirm("sometext");-true or false(cancel)-can be written without the window prefix
//window.prompt -unos prije ucitavanja stranice
/*
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
*/ 


/*--------------jednostavni BOM primjeri
console.log("window.innerWidth;");
console.log("window.innerHeight;");
console.log("window.location.hostname");//domena je
console.log("window.location.pathname");
-----------------*/
//window.location=heijrf.html;--odmah nas vodi na tu stranicu

//TIMING EVENTS-setTimeout(function, milliseconds) & setInterval(function, milliseconds) i clearInterval() i clearTimeout()
/*The window object allows execution of code at specified time intervals

<p>(You must click "Stop" before the 3 seconds are up.)</p>

<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>

<script>
function myFunction() {
  alert("Hello");
}
</script>

*/

//COOKIESSSS
// JavaScript can create, read, and delete cookies with the document.cookie property

var h1= document.createElement("h1");
h1.appendChild(document.createTextNode("Ovo je tekst unutar h1"))
var dDescr =document.querySelector(".opis");
dDescr.parentNode.prepend(h1);//append() je za ispod elementa
//kreiraj element ispid ili iznad elementa u HTML-u

divInfo.classList.add("info");
