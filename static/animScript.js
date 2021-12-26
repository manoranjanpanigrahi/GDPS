
const image = document.getElementById("sliderImg");
const allImg = new Array(
  "/static/images/6.jpg",
  "/static/images/3.jpg",
  "/static/images/4.jpg",
  "/static/images/5.jpg",
  "/static/images/1.jpg"
);
const allImgLength = allImg.length;
let i = 0;
// setTimeout(slider, 3000);
function slider() {
  if (i > allImgLength-1) {
    i = 0;
  }
  image.src = allImg[i];
  i++;
  setTimeout("slider()", 3000);
}

