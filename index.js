const greeting = document.getElementById("greeting");
greeting.style.fontSize = "50px"
greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";

const username = window.prompt("what's your name?", "Jane");
greeting.innerHTML = "welcome to my library, " + username + "!";
