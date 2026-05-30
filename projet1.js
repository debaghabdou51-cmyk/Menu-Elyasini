
let language = document.getElementById('selection');
let submit = document.getElementById('submit');

// Connect all language main section divs
let l1 = document.getElementById('l1'); // English
let l2 = document.getElementById('l2'); // Spanish
let l3 = document.getElementById('l3'); // French
let l4 = document.getElementById('l4'); // Arabic


let allLanguages = [l1, l2, l3, l4];



submit.onclick = function() {
    
    allLanguages.forEach(function(langSection) {
        if (langSection) {
            langSection.style.display = 'none';
        }
    });

   
    if (language.value === 'English') {
        l1.style.display = 'block';
    } 
    else if (language.value === 'Spanish') {
        l2.style.display = 'block';
    } 
    else if (language.value === 'Frensh') { 
        l3.style.display = 'block';
    } 
    else if (language.value === 'Arabic') {
        l4.style.display = 'block';
    }
};


document.querySelectorAll('.category-list').forEach(function(list) {
    
    let categoryHeader = list.previousElementSibling;

    if (categoryHeader && categoryHeader.tagName === 'H3') {
        
        categoryHeader.style.cursor = 'pointer';
        categoryHeader.style.userSelect = 'none';

       
        categoryHeader.onclick = function() {
           
            let items = list.querySelectorAll('.output');
            
            items.forEach(function(item) {
                if (item.style.display === 'block') {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'block';
                }
            });
        };
    }
})