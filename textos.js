document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll('.modal-button');
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetModalId = button.getAttribute('data-modal-target');
            const targetModal = document.getElementById(targetModalId);

            targetModal.style.display = 'flex';

            // Permitir que el navegador aplique el cambio de estilo antes de iniciar la animación
            setTimeout(() => {
                targetModal.style.animation = 'fadeIn 0.3s ease-in-out forwards';
            }, 50);

            // Deshabilitar el desplazamiento de fondo cuando el modal está abierto
            document.body.style.overflow = 'hidden';
        });
    });

    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modalToCloseId = closeButton.getAttribute('data-modal-close');
            const modalToClose = document.getElementById(modalToCloseId);

            modalToClose.style.animation = 'fadeOut 0.3s ease-in-out forwards';

            // Habilitar el desplazamiento de fondo cuando el modal está cerrado
            document.body.style.overflow = 'auto';

            // Esperar a que termine la animación antes de ocultar el modal
            modalToClose.addEventListener('animationend', () => {
                modalToClose.style.display = 'none';
                modalToClose.style.animation = '';
            }, { once: true });
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            const modalToClose = event.target;
            modalToClose.style.animation = 'fadeOut 0.3s ease-in-out forwards';

            // Habilitar el desplazamiento de fondo cuando el modal está cerrado
            document.body.style.overflow = 'auto';

            // Esperar a que termine la animación antes de ocultar el modal
            modalToClose.addEventListener('animationend', () => {
                modalToClose.style.display = 'none';
                modalToClose.style.animation = '';
            }, { once: true });
        }
    });
});
