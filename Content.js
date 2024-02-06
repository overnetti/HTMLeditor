//Wraps text with specific tags
function wrapTextWithTag(tagOne, tagTwo) {
    document.addEventListener('mouseup', function(event) {
        let selectedText = window.getSelection().toString().trim();
        const txt = document.getElementById("txt");
    
        if (selectedText !== '') {
            const before = txt.value.substring(0, txt.selectionStart);
            const sel = txt.value.substring(txt.selectionStart, txt.selectionEnd);
            const after = txt.value.substring(txt.selectionEnd);
            txt.value = `${before}${tagOne}${sel}${tagTwo}${after}`;
            //console.log(txt.value);
        }

        document.removeEventListener('mouseup', wrapTextWithTag);
    })
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("pTagButton").addEventListener('click', function() {
        wrapTextWithTag('<p>', '</p>');
    });
});

//Currently creates an alert when clicked for functionality test
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("hrefTagButton").addEventListener('click', function() {
        alert('Clicked!');
        //wrapTextWithTag('<a href>', </a>');
    });
});

//Currently creates an alert when clicked for functionality test
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("liTagButton").addEventListener('click', function() {
        alert('Clicked!');
        //wrapTextWithTag('<li>', </li>');
    });
});
