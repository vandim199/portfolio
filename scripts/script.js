if (typeof window !== "undefined") {
  window.onload = loaded;
}

function loaded() {
  //alert("loaded");

  document.getElementById("bars").onclick = function () {
    hamburgerMenu();
  };
  document.getElementById("aboutButton").onclick = function () {
    scrollToAbout();
  };
  document.getElementById("galleryButton").onclick = function () {
    scrollToLogoGallery();
  };
  document.getElementById("gamesButton").onclick = function () {
    scrollToGames();
  };

  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");
}
function hamburgerMenu() {
  var x = document.getElementById("navigation");
  var y = document.getElementById("bars");

  if (
    window.matchMedia("screen and (max-device-width: 768px)").matches ||
    window.matchMedia("screen and (max-width: 768px)").matches
  ) {
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.src = "images/UI/Bars.png";
    } else {
      x.style.display = "flex";
      y.src = "images/UI/Close.png";
    }
  } else x.style.display = "flex";
}

function openImg(imgSource) {
  fullImg.src = imgSource;
  fullImgBox.style.display = "flex";
}

function closeImg() {
  fullImgBox.style.display = "none";
}

const observer = new IntersectionObserver((entires) => {
  entires.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
