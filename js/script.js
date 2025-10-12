document.addEventListener('DOMContentLoaded', () => {

    // 1. TOGGLE DE TEMA (MODO OSCURO/CLARO)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificar si hay una preferencia guardada o usar la preferencia del sistema
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    // Aplicar el tema guardado
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
    }
    
    // Manejar el click del toggle
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        if (newTheme === 'light') {
            body.setAttribute('data-theme', 'light');
        } else {
            body.removeAttribute('data-theme');
        }
        
        // Guardar la preferencia
        localStorage.setItem('theme', newTheme);
    });

    // 2. SMOOTH SCROLL
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

    // 3. ANIMACIÓN DE "FADE-IN" AL HACER SCROLL
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

    // 4. ANIMACIÓN PARA LAS BARRAS DE HABILIDADES (se activa con la misma lógica)
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