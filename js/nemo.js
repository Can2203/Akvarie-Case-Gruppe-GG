// Julie

console.log("hej");


// function hideUnhide(id) {
//     const p1 = document.getElementById(id);

//     if (p1.style.display == "none") {
//         p1.style.display = "block";
//         p1.style.display = "flex";

        


//     } else {
//         p1.style.display = "none";
//         p1.style.color = "transparent";
//     }

// }

// function hideUnhide(id) {
//     const p2 = document.getElementById(id);

//     if (p2.style.display == "none") {
//         p2.style.display = "block";
//         p2.style.display = "flex";
//     } else {
//         p2.style.display = "none";
//         p2.style.color = "transparent";
//     }

// }


// function hideUnhide(id) {
//     const p3 = document.getElementById(id);

//     if (p3.style.display == "none") {
//         p3.style.display = "block";
//         p3.style.display = "flex";
//     } else {
//         p3.style.display = "none";
//         p3.style.color = "transparent";
//     }

// }


// function hideUnhide(id) {
//     const p4 = document.getElementById(id);

//     if (p4.style.display == "none") {
//         p4.style.display = "block";
//         p4.style.display = "flex";
//     } else {
//         p4.style.display = "none";
//         p4.style.color = "transparent";
//     }

// }


// function hideUnhide(id) {
//     const p5 = document.getElementById(id);

//     if (p5.style.display == "none") {
//         p5.style.display = "block";
//         p5.style.display = "flex";
//     } else {
//         p5.style.display = "none";
//         p5.style.color = "transparent";
//     }

// }


// function hideUnhide(id) {
//     const p6 = document.getElementById(id);

//     if (p6.style.display == "none") {
//         p6.style.display = "block";
//         p6.style.display = "flex";
//     } else {
//         p6.style.display = "none";
//         p6.style.color = "transparent";
//     }

// }


// function hideUnhide(id) {
//     const p7 = document.getElementById(id);

//     if (p7.style.display == "none") {
//         p7.style.display = "block";
//         p7.style.display = "flex";
//     } else {
//         p7.style.display = "none";
//         p7.style.color = "transparent";
//     }

// }


// function hideUnhide(id) {
//     const p8 = document.getElementById(id);

//     if (p8.style.display == "none") {
//         p8.style.display = "block";
//         p8.style.display = "flex";
//     } else {
//         p8.style.display = "none";
//         p8.style.color = "transparent";
//     }

// }


function hideUnhide(id) {
    const storBoble = document.getElementById(id);

    const nummer = id.replace("paragraph", "");
    const lilleBoble = document.querySelector(
        ".boble" + nummer + " img"
    );

    if (getComputedStyle(storBoble).display === "none") {
        storBoble.style.display = "flex";
        lilleBoble.style.opacity = "0.2";
    } else {
        storBoble.style.display = "none";
        lilleBoble.style.opacity = "1";
    }
}


const nemoLyd=document.querySelector("#nemo-lyd");
const nemoPaamindelse= new Audio ("Lyd/nemo-repeat.mp3")
let nemoTimer;

function startNemoTimer(){
    clearTimeout(nemoTimer);

    nemoTimer=setTimeout(function(){
        nemoPaamindelse.play();
    },15000);
}

nemoLyd.addEventListener("ended", startNemoTimer);
nemoPaamindelse.addEventListener("ended", startNemoTimer);
document.addEventListener("click", startNemoTimer);



