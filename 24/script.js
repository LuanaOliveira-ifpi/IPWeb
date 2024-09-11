
function toggleElements(selector, elementType, show) {
    let $elements;
    

    if (elementType === 'tag') {
        $elements = $(selector);
    } else if (elementType === 'class') {
        $elements = $('.' + selector);
    } else if (elementType === 'id') {
        $elements = $('#' + selector);
    }


    if (show) {
        $elements.fadeIn('slow');  
    } else {
        $elements.fadeOut('slow'); 
    }
}


$(document).ready(function() {
  
    $('.box1').click(function() {
        alert('Clique detectado!');
    });

  
    $('.box2').dblclick(function() {
        alert('Clique duplo detectado!');
    });

 
    $('.box3').mouseover(function() {
        alert('Mouse sobre o elemento!');
    });
});
