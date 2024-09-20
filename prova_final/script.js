const btnAbrirModal = document.getElementById('btnAbrirModal');
const modalContato = document.getElementById('modalContato');
const btnFecharModal = document.getElementById('btnFecharModal');

// Abrir modal
btnAbrirModal.addEventListener('click', function() {
    modalContato.style.display = 'block';
});

// Fechar modal
btnFecharModal.addEventListener('click', function() {
    modalContato.style.display = 'none';
});

// Fechar modal ao clicar fora da janela
window.addEventListener('click', function(event) {
    if (event.target === modalContato) {
        modalContato.style.display = 'none';
    }
});

