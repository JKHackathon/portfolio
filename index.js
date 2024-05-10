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
