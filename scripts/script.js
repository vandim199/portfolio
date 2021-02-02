if (typeof window !== "undefined"){

    window.onload = loaded;
}

function loaded(){
    //alert("loaded");

    document.getElementById("bars").onclick = function() {hamburgerMenu()};
    document.getElementById("aboutButton").onclick = function() {scrollToAbout()};
}
function hamburgerMenu() {
    if(window.matchMedia('screen and (max-device-width: 768px)').matches || window.matchMedia('screen and (max-width: 768px)').matches)
    {
        var x = document.getElementById("navigation");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}

function scrollToAbout() {
    document.documentElement.scrollTop = 0;
}

function scrollToLogoGallery() {
    var elmnt = document.getElementById("gallery");
    elmnt.scrollIntoView();
}