const btnAbrirModal = document.getElementById('btnAbrirModal');
const modalContato = document.getElementById('modalContato');
const btnFecharModal = document.getElementById('btnFecharModal');


btnAbrirModal.addEventListener('click', function() {
    modalContato.style.display = 'block';
});


btnFecharModal.addEventListener('click', function() {
    modalContato.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modalContato) {
        modalContato.style.display = 'none';
    }
});

