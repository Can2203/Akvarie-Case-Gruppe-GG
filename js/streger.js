const fisk = document.querySelector(".Hovedfisk");
const bobler = document.querySelectorAll("button.boble");
const svg = document.querySelector(".streger");

function tegnStreger() {
    svg.innerHTML = "";

    const f = fisk.getBoundingClientRect();
    const fiskX = f.x + f.width / 2;
    const fiskY = f.y + f.height / 2;

    bobler.forEach(function(boble) {
        const b = boble.getBoundingClientRect();
        if (b.width === 0) return;

        const streg = document.createElementNS("http://www.w3.org/2000/svg", "line");
        streg.setAttribute("x1", fiskX);
        streg.setAttribute("y1", fiskY);

        const boblensX = b.x + b.width / 2;
        const boblensY = b.y + b.height / 2;
        const dx = boblensX - fiskX;
        const dy = boblensY - fiskY;
        const laengde = Math.sqrt(dx * dx + dy * dy);
        const afkort = b.width / 2 * 1.2;

        streg.setAttribute("x2", boblensX - dx / laengde * afkort);
        streg.setAttribute("y2", boblensY - dy / laengde * afkort);
        svg.appendChild(streg);
    });
}

window.addEventListener("load", tegnStreger);
window.addEventListener("resize", tegnStreger);