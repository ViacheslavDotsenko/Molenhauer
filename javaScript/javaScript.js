document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    const languageItems = document.querySelectorAll(".language_list");  
    
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
   
    languageItems.forEach(function(item) {
        item.addEventListener("click", function() {           
            if (item.classList.contains("selected")) return;
           
            languageItems.forEach(function(langItem) {
                langItem.classList.remove("selected");
            });            
            item.classList.add("selected");
        });
    });
});
