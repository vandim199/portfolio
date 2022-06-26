if (typeof window !== "undefined") {

    window.onload = loaded;
}

function loaded(){
    //alert("loaded");

    document.getElementById("bars").onclick = function() {hamburgerMenu()};
    document.getElementById("aboutButton").onclick = function() {scrollToAbout()};
    document.getElementById("galleryButton").onclick = function() {scrollToLogoGallery()};
    document.getElementById("gamesButton").onclick = function() {scrollToGames()};

    var fullImgBox = document.getElementById("fullImgBox");
    var fullImg = document.getElementById("fullImg");
}
function hamburgerMenu() {
    var x = document.getElementById("navigation");
    var y = document.getElementById("bars");
    
    if(window.matchMedia('screen and (max-device-width: 768px)').matches || window.matchMedia('screen and (max-width: 768px)').matches)
    {
        if (x.style.display === "block") {
            x.style.display = "none";
            y.src = "images/UI/Bars.png"
        } else {
            x.style.display = "block";
            y.src = "images/UI/Close.png"
        }
    }
    else x.style.display="block";
}

function scrollToAbout() {
    var aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView();
}

function scrollToLogoGallery() {
    var gallerySection = document.getElementById("gallery");
    gallerySection.scrollIntoView();
}

function scrollToGames() {
    var gamesSection = document.getElementById("games");
    gamesSection.scrollIntoView();
}

function openImg(imgSource)
{
    fullImg.src = imgSource;
    fullImgBox.style.display = "flex";
}

function closeImg()
{
    fullImgBox.style.display = "none";
}