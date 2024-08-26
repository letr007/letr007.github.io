window.onscroll = function() {
    var footer = document.getElementById("pageFooter");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.bottom = "0";
    } else {
        footer.style.bottom = "-100px";
    }
};