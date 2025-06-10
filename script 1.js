document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Botones de Solución ---
    const solutionButtons = document.querySelectorAll('.solution-btn');
    const solutionDisplay = document.getElementById('solution-display');

    const solutions = {
        separacion: 'Podemos concientizar sobre la separación de basura en el Plantel 20 mediante campañas visuales con carteles, talleres educativos, estaciones de reciclaje bien identificadas, jornadas de limpieza con participación estudiantil, retos ecológicos que motiven cambios de hábitos y difusión en redes y eventos escolares.',
        campaña: 'Campañas participativas, que involucran a la comunidad en actividades como jornadas de limpieza o reciclaje; y campañas digitales, que aprovechan redes sociales para difundir mensajes y movilizar apoyo.',
        comida: 'se pueden implementar estrategias como talleres educativos sobre nutrición, comedores saludables con opciones equilibradas, campañas de concientización con información accesible, huertos escolares orgánicos para promover el consumo de productos frescos y actividades interactivas que motiven a los estudiantes a mejorar sus hábitos alimenticios.',
        talleres: 'pueden funcionar talleres prácticos de cocina saludable, donde los estudiantes aprendan a preparar opciones nutritivas; talleres de educación nutricional, que expliquen los beneficios de una dieta equilibrada; y talleres de huertos escolares, que fomenten el cultivo de alimentos frescos. También pueden organizarse actividades interactivas con juegos y dinámicas para reforzar el aprendizaje..',
        reforestacion: 'Primero, se debe hacer una solicitud formal para ejecutar la jornada y gestionar permisos necesarios. Luego, se organiza la logística, incluyendo selección de especies nativas, herramientas y voluntarios. También es útil realizar talleres previos para capacitar a los participantes sobre el proceso de siembra y cuidado de los árboles. Durante la jornada, se lleva a cabo la plantación en áreas estratégicas y se establecen planes de seguimiento para garantizar el crecimiento adecuado de los árboles.'
    };

    solutionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const solutionKey = button.dataset.solution;
            solutionDisplay.textContent = solutions[solutionKey] || 'No hay descripción para esta solución.';
        });
    });

    // Inicializar el display de soluciones con un mensaje por defecto
    solutionDisplay.textContent = 'Haz clic en un botón para ver una propuesta de solución.';

    // --- Lógica del Carrusel de Imágenes ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Ancho de una imagen

    // Ajustar el slide inicial
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) { // Si ya estamos en la última imagen
            counter = 0; // Volver al inicio
        } else {
            counter++;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) { // Si ya estamos en la primera imagen
            counter = carouselImages.length - 1; // Ir a la última
        } else {
            counter--;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Clonar imágenes para un carrusel infinito (opcional, para un efecto más suave)
    // Para simplificar, en esta versión no se implementa el clonado, pero se puede añadir si se desea un "loop" más fluido.

    // --- Lógica del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const suggestion = document.getElementById('suggestion').value;

        // **Aquí es donde necesitas un backend para enviar el correo.**
        // JavaScript del lado del cliente NO puede enviar correos directamente a un correo personal por razones de seguridad.

        // Una forma común de manejar esto es usar un servicio de backend como:
        // 1. Un script de PHP en tu servidor.
        // 2. Un servicio de terceros como EmailJS, Formspree, Netlify Forms, etc.
        // 3. Un backend personalizado con Node.js, Python, etc.

        // Ejemplo conceptual (NO FUNCIONAL SIN BACKEND):
        /*
        fetch('/send-email', { // Esta ruta debería ser tu endpoint de backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, suggestion }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('¡Gracias por tu sugerencia! Ha sido enviada.');
                contactForm.reset(); // Limpiar el formulario
            } else {
                alert('Hubo un error al enviar tu sugerencia. Por favor, intenta de nuevo.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un problema de conexión. Por favor, intenta de nuevo.');
        });
        */

        // **Para este ejemplo, solo mostraremos una alerta para simular el envío:**
        alert(`Sugerencia enviada:\n\nNombre: ${name}\nCorreo: ${email}\nSugerencia: ${suggestion}\n\nNota: Para enviar esto a un correo real, se necesita un servidor (backend).`);
        contactForm.reset(); // Limpiar el formulario después de "enviar"
    });
});