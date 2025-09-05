(function () {
    "use strict";

    // Window Scroll
    window.addEventListener("scroll", () => {
        const scrolling = window.scrollY;
        
        const header = document.querySelector(".main-header");
        // Sticky header
        if (scrolling > 80) {
            header.classList.add("sticky-header");
        } else {
            header.classList.remove("sticky-header");
        }
    });

    // Set Current Year
    const yearElement = document.querySelector(".current-year");
    yearElement.innerHTML = new Date().getFullYear();
})();
