
//document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
var timer;
autoSlider();

function autoSlider() {
    timer = setTimeout(function () {
        const polosa = document.getElementById('polosa');
        left = left - 128;
        if (left < -384) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + 'px';
        autoSlider();     
    }, 2000);

}
// function sliderLeft() {
//     const polosa = document.getElementById('polosa');
//     left = left - 128;
//     if (left < -384) {
//         left = 0;
//     }
//     polosa.style.left = left + 'px';
//     autoSlider();
// }

























