function run(){
   document.getElementById("paragraph").innerHTML = "hello world!";
   document.getElementByID("paragraph").style.backgroundColor = "green";
   document.getElementByID("paragraph").style.color = "white";
   document.getElementByID("paragraph").style.padding = "20px";
   randomNum();
}

function randomNum(){
   let ran = Math.floor(Math.random() * 10);
   document.getElementById("random").innerHTML = ran;
}