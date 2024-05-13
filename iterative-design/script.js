function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - 100 <=
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


const currentSlide = new Array(0,0,0)
// let currentSlide = 0;
const slideContainers = document.querySelectorAll(".slideshow-container"); //.querySelectorAll(".slide");

const slides = new Array(slideContainers[0].querySelectorAll(".slide"), slideContainers[1].querySelectorAll(".slide"), slideContainers[2].querySelectorAll(".slide"))

// const slides = slideContainers[0].querySelectorAll(".slide");
// const slides2 = slideContainers[1].querySelectorAll(".slide");

function showSlide(slideContainerIndex, index, prevIndex) {
  // Hide all slides
  // slides.forEach((slide) => {
  //   slide.style.opacity = 0;
  // });

  slides[slideContainerIndex][prevIndex].style.opacity = 0;

  // Display the selected slide
  slides[slideContainerIndex][index].style.opacity = 1;
}

function nextSlide(index) {
  if (currentSlide[index] + 1 < slides[index].length) {
    currentSlide[index]++;
  }
  // currentSlide = (currentSlide + 1) % slides.length;
  // slides[currentSlide - 1].style.transform = `translateX(-10%)`
  showSlide(index, currentSlide[index], currentSlide[index] - 1);
}

function prevSlide(index) {
  if (currentSlide[index] > 0) {
    currentSlide[index]--;
  }
  // currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  // slides[currentSlide + 1].style.transform = `translateX(10%)`
  showSlide(index, currentSlide[index], currentSlide[index] + 1);
}

// Show the initial slide
showSlide(0, currentSlide[0], 0);
showSlide(1, currentSlide[0], 0);
showSlide(2, currentSlide[0], 0);

// document.addEventListener("DOMContentLoaded", function () {
//   const galleryTrack = document.querySelector(".gallery-track");
//   const prevButton = document.querySelector(".prev-button");
//   const nextButton = document.querySelector(".next-button");
//   const images = document.querySelectorAll(".gallery-track img");
//   const imageWidth = images[0].clientWidth;
//   const viewportWidth = galleryTrack.clientWidth;

//   let currentIndex = 0;

//   // Show initial image
//   images.forEach((image) => {
//     image.style.transform = `translateX(${imageWidth}px)`;
//   });
//   // images[currentIndex].style.transform = `translateX(${imageWidth}px)`//`translateX(${viewportWidth}px + 10vw)`;

//   // Scroll to previous image
//   prevButton.addEventListener("click", function () {
//     if (currentIndex > 0) {
//       images[currentIndex].style.transform = `translateX(${imageWidth}px)`;
//       currentIndex--;
//       images[currentIndex].style.transform = "translateX(0)";
//     }
//   });

//   // Scroll to next image
//   nextButton.addEventListener("click", function () {
//     if (currentIndex < images.length - 1) {
//       images[currentIndex].style.transform = `translateX(-${imageWidth}px)`;
//       currentIndex++;
//       images[currentIndex].style.transform = "translateX(0)";
//     }
//   });

// Handle horizontal scrolling with trackpad or mouse swipe
// galleryTrack.addEventListener('wheel', function(e) {
//     e.preventDefault();
//     if (e.deltaY < 0 && currentIndex > 0) {
//         prevButton.click();
//     } else if (e.deltaY > 0 && currentIndex < images.length - 1) {
//         nextButton.click();
//     }
// });
// });

// const scrollItem = document.querySelector(".scroll-item");

// const handleIntersection = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersection) {
//       entry.target.classList.add("active");
//       observer.unobserver(entry.target);
//       console.log(entry);
//     }
//   });
// };

// const observer = new IntersectionObserver(handleIntersection);

// observer.observe(scrollItem);
