let slideIndex = 1;
showSlides(slideIndex);

// Function to navigate slides manually
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}
