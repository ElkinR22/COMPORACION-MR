document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (loginForm.checkValidity()) {
                // Simulación de un inicio de sesión exitoso
                window.location.href = 'dashboard.html';
            }
            loginForm.classList.add('was-validated');
        }, false);
    }
});
