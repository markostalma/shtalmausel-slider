/****************************************
*** Shtalmausel slider *** 
Version: Pre-alpha 0.1.0 
AuthorName: Marko Shtalma
AuthorEmail: mstalmatovic@gmail.com
AuthorURL: markostalma.ninja
****************************************/
let images = document.querySelectorAll("img.shtalmausel-img");
let dotsWrapper = document.querySelector(".shtalmausel-dots");
let totalImg = images.length;
let currentSlide = 0;
// Make dots for images navigation
(function(){
    for(let i = 0; i < totalImg; i++){
       let dots = document.createElement("span");
        dots.className = "shtalmausel-dot";
        if(i < totalImg){
            dotsWrapper.appendChild(dots);
        }
    }
})();
// Change slider image on dot click
dots = document.querySelectorAll(".shtalmausel-dot");
dots.forEach((dot, value) => {
    dot.onclick = () => {
        for(let i = 0; i < totalImg; i++){
            images[i].classList.remove("active");
            dots[i].classList.remove("active-dot");
        }
        currentSlide = value;
        images[currentSlide].classList.add("active");
        dot.classList.add("active-dot");
    }
});
// Automatic slide images
function shtalmauselSlider() {
    // Restart time
    var time = 3500;
    // Remove Active class on all slide images
    for(let i = 0; i < totalImg; i++){
        images[i].classList.remove("active");
        dots[i].classList.remove("active-dot");
    }   
    // Increment to change a images
    currentSlide++;
    // Restart statement on last image
    if (currentSlide > totalImg) {
        currentSlide = 1;
    }
    // Add Active class to show image 
    images[currentSlide - 1].classList.add("active");
    dots[currentSlide - 1].classList.add("active-dot");
    // Call function to change images in intervals
    slideInterval = setTimeout("shtalmauselSlider()", time);
    // Stop Image On Hover
    stopOnHover();
}
// Stop slider on hover
function stopOnHover(){
    // Stop slider on image mouse hover
    images[currentSlide - 1].onmouseenter = function(){
        clearInterval(slideInterval);
    };
    // Restar slider on image mouse leave
    images[currentSlide -1].onmouseleave = function(){
        slideInterval = setTimeout("shtalmauselSlider()", 1500);
    };
};
// Start slider function on load
window.onload = shtalmauselSlider;