
function toggleElements(selector, elementType, isVisible) {
    let $elements;
    
    if (elementType === 'tag') {
        $elements = $(selector);
    } else if (elementType === 'class') {
        $elements = $('.' + selector);
    } else if (elementType === 'id') {
        $elements = $('#' + selector);
    }
    
    if (isVisible) {
        $elements.slideDown('slow'); // Alterado para slideDown para um efeito diferente
    } else {
        $elements.slideUp('slow');   // Alterado para slideUp para um efeito diferente
    }
}

$(document).ready(function() {
    $('.box1').on('click', function() {
        alert('Clique detectado!');
    });

    $('.box2').on('dblclick', function() {
        alert('Clique duplo detectado!');
    });

    $('.box3').on('mouseover', function() {
        alert('Mouse sobre o elemento!');
    });
});
