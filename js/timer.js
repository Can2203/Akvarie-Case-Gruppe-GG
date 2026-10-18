// Frederikke

let timer = setTimeout(function(){
    window.location.href="index.html";
}, 180000);


document.addEventListener("click", function(){
    clearTimeout(timer);

    timer=setTimeout(function(){
        window.location.href="index.html";
    }, 180000);
});