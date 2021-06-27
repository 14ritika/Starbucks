function showFavs(evt, starData) {
    var i, star, favs;
   favs = document.getElementsByClassName("favs");
for (i = 0; i < favs.length; i++) {
if(!favs[i].classList.contains("hidden")){
favs[i].classList.add("hidden");
}
}
console.log(document.getElementById(starData).classList)
document.getElementById(starData).classList.replace("hidden" , "block");
star = document.getElementsByClassName("star");
for (i = 0; i < star.length; i++) {
if(star[i].classList.contains("border-b-4")){
star[i].classList.remove("border-dark","border-b-4");
}
}
evt.currentTarget.classList.add( "border-b-4","border-dark");
}

function shows(evt,li,up,down,head) {
var head,li;
li=document.getElementById(li);
head=document.getElementById(head);
console.log(li);
if(li.classList.contains("hidden")){
console.log(li.classList);
li.classList.remove("hidden");
li.classList.add("block");
document.getElementById(up).classList.replace("lg:hidden" , "hidden");
document.getElementById(down).classList.replace("hidden" , "lg:hidden");
head.classList.add('flex-col');
console.log(head.classList);
console.log(li.classList);
} else{
console.log(li.classList);
li.classList.remove("block");
li.classList.add("hidden");
document.getElementById(down).classList.replace("lg:hidden" , "hidden");
document.getElementById(up).classList.replace("hidden" , "lg:hidden");
head.classList.remove('flex-col');
console.log(head.classList);
console.log(li.classList);
}
}