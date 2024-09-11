// Função para alternar a visibilidade dos elementos
function toggleElements(selector, type, shouldShow) {
    let $elements;

    // Seleciona os elementos com base no tipo fornecido
    if (type === 'tag') {
        $elements = $(selector);
    } else if (type === 'class') {
        $elements = $('.' + selector);
    } else if (type === 'id') {
        $elements = $('#' + selector);
    }

    // Mostrar ou esconder os elementos com uma animação suave
    if (shouldShow) {
        $elements.fadeIn('slow');
    } else {
        $elements.fadeOut('slow');
    }
}

$(document).ready(function() {
    // Configura o evento de clique
    $('.clickable-item').click(function() {
        alert('Você clicou no elemento!');
    });

    // Configura o evento de duplo clique
    $('.dblclick-item').dblclick(function() {
        alert('Você deu um duplo clique no elemento!');
    });

    // Configura o evento de mouse sobre
    $('.mouseover-item').mouseover(function() {
        alert('O mouse está sobre o elemento!');
    });
});

