// Julie

console.log("hej");


function hideUnhide(id) {
    const p1 = document.getElementById(id);

    if (p1.style.display == "none") {
        p1.style.display = "block";
        p1.style.display = "flex";
    } else {
        p1.style.display = "none";
        p1.style.color = "transparent";
    }

}


const aktivitetsLyd=document.querySelector("#laer-om-sprutte");
let gentag;

aktivitetsLyd.addEventListener("ended", function() {
  clearTimeout(gentag);

gentag=setTimeout(function(){
  aktivitetsLyd.play()
},30000);
});

const aktivitetsBoble=document.querySelector(".taleboble");

aktivitetsLyd.addEventListener("play",function(){
  aktivitetsBoble.classList.add("vis");
});

aktivitetsLyd.addEventListener("ended", function(){
  aktivitetsBoble.classList.remove("vis");
});

if (!aktivitetsLyd.paused){
  aktivitetsBoble.classList.add("vis");
}

































