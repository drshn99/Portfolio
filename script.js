// let dot2=document.querySelector('.dot2')
// let dot1=document.querySelector('.dot1')

// dot1.addEventListener('click',()=>{
//     document.querySelector('.slider').innerHTML=`
//     <div class="company">Shraddha (Jan 2022 - Mar 2022)</div>
//     <div class="role">Software Engineer </div>
//     <div class="description">
//       <ul>
//         <li>Responsible for creating the display page of
//           web application using HTML, CSS, and JS.</li>
//         <li>Tested and debugged the code to ensure its
//           quality and performance</li>
//           <li>Designed a display page that is visually
//             appealing as well as mobile friendly.

//             </li>
//           <li>Reference: shraddhafabrication.in</li>
//       </ul>
//       <div class="changing" style="text-align:center">
//         <span class="dot" ></span>
//         <span class="dot dot2" ></span>

//       </div>
//     </div>
//     `

// })

// dot2.addEventListener('click',()=>{
//     document.querySelector('.slider').innerHTML=`
//       <div class="changing2" style="text-align:center">
//       <span class="dot dot1" ></span>
//       <span class="dot dot2" ></span>

//     </div>
//     </div>
//     `
// })

const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
const goNext = () => {
  counter++;
  slideImage();
};
const goPrevious = () => {
  counter--;
  slideImage();
};
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
