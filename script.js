// Scrolling Effect

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom - 200 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    const scrollItems = document.querySelectorAll(".scroll-item");
    scrollItems.forEach((scrollItem) => {
      if (isInViewport(scrollItem)) {
        scrollItem.classList.add("active");
        console.log(scrollItem);
        //   window.removeEventListener("scroll", handleScroll);
      }
    });
  }
  
  window.addEventListener("scroll", handleScroll);
  

  // Mouse trail
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
    circle.style.backgroundColor = colors[Math.ceil(index / 2) % colors.length];
  });
  
  let circlesVisible = true;
  
  // window.addEventListener("mouseleave", () => {
  //   //   circles.forEach((circle) => {
  //   //     circle.style.opacity = 0;
  //   //     circle.style.visibility = "hidden";
  //   //   });
  //   circlesVisible = false;
  // });
  let timeoutId;
  
  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
    circlesVisible = true;
    clearTimeout(timeoutId);
  
    // Set a new timeout to check if the mouse has stopped moving
    timeoutId = setTimeout(() => {
      // Code to run after the mouse has stopped moving for 1 second
      console.log("Mouse stopped moving for 1 second!");
      circles.forEach((circle) => {
        circle.style.opacity = 0;
      //   circle.style.visibility = "hidden";
      });
      circlesVisible = false;
      return;
  
      // Place your desired actions here, such as hiding a div or performing other tasks
    }, 500);
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    if (circlesVisible) {
      circles.forEach((circle) => {
          circle.style.opacity = 1;
        });
    }
  
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
  

  // Image Gallery
  const currentSlide = new Array(0,0,0)
const slideContainers = document.querySelectorAll(".slideshow-container"); //.querySelectorAll(".slide");

const slides = new Array(slideContainers[0].querySelectorAll(".slide"), slideContainers[1].querySelectorAll(".slide"), slideContainers[2].querySelectorAll(".slide"))

function showSlide(slideContainerIndex, index, prevIndex) {
  slides[slideContainerIndex][prevIndex].style.opacity = 0;

  // Display the selected slide
  slides[slideContainerIndex][index].style.opacity = 1;
}

function nextSlide(index) {
  if (currentSlide[index] + 1 < slides[index].length) {
    currentSlide[index]++;
  }
  showSlide(index, currentSlide[index], currentSlide[index] - 1);
}

function prevSlide(index) {
  if (currentSlide[index] > 0) {
    currentSlide[index]--;
  }
  showSlide(index, currentSlide[index], currentSlide[index] + 1);
}

// Show the initial slide
showSlide(0, currentSlide[0], 0);
showSlide(1, currentSlide[0], 0);
showSlide(2, currentSlide[0], 0);