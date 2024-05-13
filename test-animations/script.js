//https://codepen.io/zainzafar/pen/oNypoEr

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
//   "#23b9ff",
  "#00bbff",
  "#00c2ff",
  "#00cbff",
  "#00d7ff",
  "#00e2f7",
  "#00ecde",
  "#00f4bd",
  "#00f99a",
  "#00fd79",
  "#2dff61",
  "#46ff58",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor =
    colors[ Math.ceil(index/2) % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 8 + "px";
    circle.style.top = y - 8 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
