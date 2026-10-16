// Frederikke

const sprutte = document.querySelector(".sprutte");
console.log(sprutte);

const ben = document.querySelectorAll(".ben");

const boble = document.querySelectorAll(".boble");

const velkomstLyd = document.querySelector("#sprutte-velkomst");
const afspilKnap = document.querySelector("#afspil-velkomst");

function afspilVelkomst() {
    velkomstLyd.play().catch(function(error) {
        console.error("Kunne ikke afspille Spruttes velkomstlyd.", error);
    });
}

afspilKnap.addEventListener("click", afspilVelkomst);
afspilVelkomst();

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