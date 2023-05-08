var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName("nav")[0].style.top = "0rem";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-4.4rem";
    }
    prevScrollpos = currentScrollPos;
}