document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    if (!header) {
        console.error("Елемент з класом 'header' не знайдено.");
        return; 
    }
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {         
            header.classList.add("fixed");
        } else {            
            header.classList.remove("fixed");
        }
    });
});



