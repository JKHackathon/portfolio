function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (windo.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const scrollItem = document.querySelector(".project");
  if (isInViewport(scrollItem)) {
    scrollItem.classList.add("active");
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.section');

//     function changeSectionStyle() {
//         sections.forEach(section => {
//             const rect = section.getBoundingClientRect();
//             const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);

//             if (isVisible) {
//                 if (section.id === 'landing') {
//                     document.body.style.backgroundColor = 'black';
//                 } else if (section.id === 'about') {
//                     document.body.style.backgroundColor = 'white';
//                 } else if (section.id === 'projects') {
//                     document.body.style.backgroundColor = 'black';
//                 }
//             }
//         });
//     }

//     document.addEventListener('scroll', changeSectionStyle);
// });
