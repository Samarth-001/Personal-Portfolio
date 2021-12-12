var vid = document.getElementById("video1");
vid.playbackRate = 0.85;

const btnscroll1 = document.getElementById("btnscroll1");
const btnscroll2 = document.getElementById("btnscroll2");
const btnscroll3 = document.getElementById("btnscroll3");
const btnscroll4 = document.getElementById("btnscroll4");
const btnscroll5 = document.getElementById("btnscroll5");

btnscroll1.addEventListener("click", function() {
   window.scrollBy({top:970, behavior:'smooth'})
});
btnscroll2.addEventListener("click", function() {
   window.scrollBy({top:970, behavior:'smooth'})
});
btnscroll3.addEventListener("click", function() {
   window.scrollBy({top:1900, behavior:'smooth'})
});
btnscroll4.addEventListener("click", function() {
   window.scrollBy({top:2890, behavior:'smooth'})
});
btnscroll5.addEventListener("click", function() {
   window.scrollBy({top:3720, behavior:'smooth'})
});
