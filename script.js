var vid = document.getElementById("video1");
vid.playbackRate = 0.85;

const btnscroll1 = document.getElementById("btnscroll1");
const btnscroll2 = document.getElementById("btnscroll2");
const btnscroll3 = document.getElementById("btnscroll3");
const btnscroll4 = document.getElementById("btnscroll4");
const btnscroll5 = document.getElementById("btnscroll5");

btnscroll1.addEventListener("click", function() {
   window.scrollTo({
       top=500,
       left=0,
   })
});
