if (typeof window !== "undefined"){

    window.onload = loaded;
}

function loaded(){
    //alert("loaded");

    document.getElementById("bars").onclick = function() {hamburgerMenu()};
    document.getElementById("aboutButton").onclick = function() {scrollToAbout()};
}
function hamburgerMenu() {
    if(window.matchMedia('screen and (max-width: 768px)').matches)
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
//    var elmnt = document.getElementById("about");
//    elmnt.scrollIntoView();
    document.documentElement.scrollTop = 0;
}