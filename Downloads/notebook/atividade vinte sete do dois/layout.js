document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel-slide img");
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].classList.add("hidden");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.remove("hidden");
    }

    // Hide all images except the first one
    for (let i = 1; i < images.length; i++) {
        images[i].classList.add("hidden");
    }

    // Call showNextImage after 5 seconds
    setInterval(showNextImage, 5000);
});