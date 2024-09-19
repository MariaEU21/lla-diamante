// Manejo del menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Verificar si los elementos existen antes de interactuar con ellos
    if (hamburger && navMenu) {
        // Alternar visibilidad del menú cuando se haga clic en el botón hamburguesa
        hamburger.addEventListener('click', function () {
            const ul = navMenu.querySelector('ul');
            if (ul) {
                ul.classList.toggle('show');
            }
        });

        // Cerrar el menú cuando se haga clic en un enlace
        const navLinks = navMenu.querySelectorAll('ul li a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                const ul = navMenu.querySelector('ul');
                if (ul) {
                    ul.classList.remove('show');
                }
            });
        });
    }
});

// Manejo del formulario de afiliación
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('afiliacion');
    const messageDiv = document.getElementById('formMessage'); // Referencia al div para mensajes

    // Verificar si el formulario existe antes de interactuar con él
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Evitar que se recargue la página al enviar el formulario

            const formData = new FormData(form); // Recoger los datos del formulario

            // Enviar los datos del formulario a Google Apps Script (o donde lo necesites)
            fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Esto evita el bloqueo CORS

            })
            .then(response => response.text())
            .then(data => {
                // Mostrar el mensaje de éxito
                if (messageDiv) {
                    messageDiv.style.display = 'block'; // Mostrar el div
                    messageDiv.style.color = 'green'; // Color verde para éxito
                    messageDiv.innerText = "La solicitud se envió con éxito. En los próximos días, un integrante del partido se pondrá en contacto con vos para completar la ficha de afiliación partidaria.";
                }
                form.reset(); // Limpiar el formulario después de enviar los datos
            })
            .catch(error => {
                // Mostrar el mensaje de error
                if (messageDiv) {
                    messageDiv.style.display = 'block'; // Mostrar el div
                    messageDiv.style.color = 'red'; // Color rojo para error
                    messageDiv.innerText = "Hubo un error al enviar la solicitud. Por favor, intenta nuevamente.";
                }
                console.error("Error:", error);
            });
        });
    }
});

// Carrusel
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    // Verificar que los botones y las diapositivas existan
    if (prevBtn && nextBtn && slides.length > 0 && dots.length > 0) {
        // Función para mostrar el slide actual
        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            // Mover el carrusel al slide actual
            const offset = -currentSlide * 100;
            document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

            // Actualizar los indicadores
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        // Función para iniciar el carrusel automático
        function startAutoSlide() {
            slideInterval = setInterval(function () {
                showSlide(currentSlide + 1);
            }, 5000); // Cambiar cada 5 segundos
        }

        // Función para detener el carrusel automático
        function stopAutoSlide() {
            clearInterval(slideInterval);
        }

        // Eventos para los botones de navegación
        nextBtn.addEventListener('click', function () {
            showSlide(currentSlide + 1);
            stopAutoSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', function () {
            showSlide(currentSlide - 1);
            stopAutoSlide();
            startAutoSlide();
        });

        // Evento para los indicadores (puntos)
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function () {
                showSlide(index);
                stopAutoSlide();
                startAutoSlide();
            });
        });

        // Mostrar el primer slide
        showSlide(currentSlide);

        // Iniciar el carrusel automático
        startAutoSlide();
    }
});

// Pop-up
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Verificar si el pop-up y su botón de cierre existen
    if (popup && closePopup) {
        // Mostrar el popup cuando se carga la página
        popup.style.display = 'flex';

        // Cerrar el popup al hacer clic en el botón de cerrar
        closePopup.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        // Cerrar el popup automáticamente después de 7 segundos
        setTimeout(function () {
            popup.style.display = 'none';
        }, 7000);
    }
});
