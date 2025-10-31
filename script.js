// Simple and robust navigation script
console.log('🚀 Script carregado!');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM pronto!');
    
    try {
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                console.log('📱 Menu mobile toggled');
            });
        }

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
                console.log('🔗 Link clicado:', this.getAttribute('href'));
            });
        });

        // Navbar background change on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }

        console.log('🎯 Navegação configurada com sucesso!');
        
    } catch (error) {
        console.error('❌ Erro no JavaScript:', error);
        // Continue funcionando mesmo com erro
    }
});

// Fallback: Se algo der errado, pelo menos log o erro
window.addEventListener('error', function(e) {
    console.error('💥 Erro global:', e.error);
});