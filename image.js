const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goprev = () => {
    counter--;
    slideimage();
};

const gonext = () => {
    counter++;
    slideimage();
};

const slideimage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
