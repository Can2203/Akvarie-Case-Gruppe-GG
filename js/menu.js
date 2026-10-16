// Frederikke

const sprutte = document.querySelector(".sprutte");
console.log(sprutte);

const ben = document.querySelectorAll(".ben");

const boble = document.querySelectorAll(".boble");

const velkomstLyd = document.querySelector("#sprutte-velkomst");
const afspilKnap = document.querySelector("#afspil-velkomst");

const taleTekst=document.querySelector("#velkomst-taleboble");
const velkomstTekst=taleTekst.textContent;

function afspilVelkomst() {
        taleTekst.textContent=velkomstTekst;
    velkomstLyd.play().catch(function(error) {
        console.error("Kunne ikke afspille Spruttes velkomstlyd.", error);
    });
}

// Viktor
afspilKnap.addEventListener("click", afspilVelkomst);
afspilVelkomst();


// Frederikke
sprutte.animate(
    [
        { transform: "translateY(0px)" },   
        { transform: "translateY(-40px)" },
        { transform: "translateY(0px)" },
    ],
    {
        duration: 4000,
        iterations: Infinity,
    }
);

ben.forEach(function(arm){
    arm.animate(
        [
            {rotate: "0deg"},
            {rotate: "5deg"},
            {rotate: "0deg"},
    ],
    {
        duration: 4000,
        iterations: Infinity,
    }
);
});

boble.forEach(function(boble, i){
    boble.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-130vh)" },
        ],
        {
            duration: 12000 + i * 700,
            delay: i * 1000,
            iterations: Infinity
        }
    );
});

let paamindelse;
velkomstLyd.addEventListener("ended",function(){
    clearTimeout(paamindelse);

    paamindelse=setTimeout(function(){
        taleTekst.textContent="Er du der stadig? Jeg har så mange fisk, jeg gerne vil vise dig! Tryk på bogen, eller prøv et spil ved lynet";
        new Audio("Lyd/sprutteRepeat.mp3").play();
    },7000);
});

