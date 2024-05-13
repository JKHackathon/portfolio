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