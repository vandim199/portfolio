if (typeof window !== "undefined") {
  window.onload = loaded;
}

function loaded() {
  //alert("loaded");

  document.getElementById("bars").onclick = function () {
    hamburgerMenu();
  };

  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");
}
function hamburgerMenu() {
  var x = document.getElementById("navigation");
  var y = document.getElementById("bars");

  if (x.style.display === "flex") {
    x.style.display = "none";
    y.src = "images/UI/Bars.png";
  } else {
    x.style.display = "flex";
    y.src = "images/UI/Close.png";
  }
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

const hiddenElements = document.querySelectorAll("section");
hiddenElements.forEach((el) => {
  observer.observe(el);
});

let root = document.documentElement;

root.addEventListener("mousemove", (e) => {
  root.animate({}, { duration: 3000, fill: "forwards" });
  root.style.setProperty("--mouseX", e.clientX - 250 + "px");
  root.style.setProperty("--mouseY", e.clientY - 250 + "px");
});

const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;
  blob.animate(
    {
      left: clientX + "px",
      top: clientY + "px",
    },
    { duration: 3000, fill: "forwards" }
  );
};
