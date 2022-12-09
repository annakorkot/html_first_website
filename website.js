const title = document.querySelector("h1")

title.addEventListener("click",function () {
    title.style.color = "pink";
    setTimeout(function(){
    title.style.color = "black";}
    ,300);
 });