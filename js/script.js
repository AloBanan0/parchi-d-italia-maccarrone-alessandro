var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos) {
        document.getElementById("navigation").style.top = "0";
    }
    else{
        document.getElementById("navigation").style.top = "-5.5rem";
    }
    prevScrollpos = currentScrollPos;
}