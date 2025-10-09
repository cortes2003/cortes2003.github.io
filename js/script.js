document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Si es el hero, vamos arriba del todo
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. ANIMACIÓN DE "FADE-IN" AL HACER SCROLL
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: deja de observar el elemento una vez que es visible
                // observer.unobserve(entry.target); 
            } else {
                 // Opcional: si quieres que la animación se repita al salir y entrar
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    hiddenElements.forEach((el) => observer.observe(el));

    // 3. ANIMACIÓN PARA LAS BARRAS DE HABILIDADES (se activa con la misma lógica)
    const skillsSection = document.querySelector('#habilidades');
    const skillBars = document.querySelectorAll('.skill-bar');

    const skillsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            skillBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-progress');
            });
            skillsObserver.unobserve(skillsSection);
        }
    }, { threshold: 0.5 });

    skillsObserver.observe(skillsSection);

});