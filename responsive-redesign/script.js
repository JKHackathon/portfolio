function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - 150 <=
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
