
function toggleElements(selector, type, shouldShow) {
    let $elements;


    if (type === 'tag') {
        $elements = $(selector);
    } else if (type === 'class') {
        $elements = $('.' + selector);
    } else if (type === 'id') {
        $elements = $('#' + selector);
    }

  
    if (shouldShow) {
        $elements.fadeIn('slow');
    } else {
        $elements.fadeOut('slow');
    }
}

$(document).ready(function() {

    $('.clickable-item').click(function() {
        alert('Você clicou no elemento!');
    });

  
    $('.dblclick-item').dblclick(function() {
        alert('Você deu um duplo clique no elemento!');
    });

 
    $('.mouseover-item').mouseover(function() {
        alert('O mouse está sobre o elemento!');
    });
});
