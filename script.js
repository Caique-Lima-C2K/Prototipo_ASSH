document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidade do Menu Mobile ---
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    if (menuToggle && sideMenu) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
        });

        // Opcional: Fechar o menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                sideMenu.classList.remove('active');
            }
        });
    }


    // --- Funcionalidade de Mostrar/Ocultar Senha na Página de Login ---
    const togglePassword = document.getElementById('toggle-password');
    const passwordField = document.getElementById('password-field');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', () => {
            // Verifica o tipo do campo de senha
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);

            // Troca o ícone do olho
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }

});