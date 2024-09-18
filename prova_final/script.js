const imagem = document.getElementById('imagem');

        
        window.addEventListener('scroll', () => {
            
            const scrollPosition = window.scrollY; 
            const windowHeight = window.innerHeight; 
            const newOpacity = 1 - scrollPosition / windowHeight;
            imagem.style.opacity = Math.max(newOpacity, 0);
        });