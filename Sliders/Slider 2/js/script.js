 const upBtn = document.querySelector('.up-button');
 const dounBtn = document.querySelector('.doun-button');
const conteiner = document.querySelector('.conteiner');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCound =mainSlide.querySelectorAll('div').length;


let activeSlideIndex = 0;

 sidebar.style.top = `-${(slidesCound - 1) * 100}vh`;

 upBtn.addEventListener('click', () => {
     changeSlide('up');
 })
 dounBtn.addEventListener('click', () => {
    changeSlide('down');
 })

 function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCound)   {
            activeSlideIndex = 0;
        }
    }else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCound - 1;
        }
    }

    const height = conteiner.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
 }





