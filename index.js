function showSlide(slideId) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    const activeSlide = document.getElementById(slideId);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }

    if (slideId === 'products') {
        const carouselElement = document.querySelector('#candyCarousel');
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            ride: 'carousel'
        });
        carousel.cycle();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide('home');
});
const vodafoneCash = document.getElementById('vodafoneCash');
if(vodafoneCash) {
    vodafoneCash.addEventListener('click', function(e){
        e.preventDefault();
        const phoneNumber = "01003515786";
        navigator.clipboard.writeText(phoneNumber).then(() => {
            document.getElementById('copiedNumber').textContent = phoneNumber;
            new bootstrap.Modal(document.getElementById('copyModal')).show();
        });
    });
}

function showSlide(slideId) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    document.getElementById(slideId).classList.add('active');

}