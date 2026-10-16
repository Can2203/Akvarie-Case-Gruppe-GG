let timer = setTimeout(function(){
    window.location.href="index.html";
}, 300000);


document.addEventListener("click", function(){
    clearTimeout(timer);

    timer=setTimeout(function(){
        window.location.href="index.html";
    }, 300000);
});