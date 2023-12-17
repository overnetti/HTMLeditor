//document.addEventListener('mouseup', function(event) {
   // var selectedText = window.getSelection().toString().trim();
   // if (selectedText !== '') {
     //   var popup = document.createElement('div');
     //   popup.id = 'highlightPopup';
      //  popup.innerHTML = '<iframe src="' + chrome.runtime.getURL('popup.html') + '" frameborder="0"></iframe>';
        
       // popup.style.left = event.pageX + 'px';
        //popup.style.top = event.pageY - 30 + 'px';

      //  document.body.appendChild(popup);
    //}
//});

//probably keep this part
var pageX;
var pageY;

$(document).ready(function() {
    $(document).bind("mouseup", function() {
        var selectedText = window.getSelection().toString().trim();
        if(selectedText != ''){
            $('ul.tools').css({
                'left': pageX + 5,
                'top' : pageY - 55
            }).fadeIn(200);
        } else {
            $('ul.tools').fadeOut(200);
        }
    });
    $(document).on("mousedown", function(e){
        pageX = e.pageX;
        pageY = e.pageY;
    });
});
