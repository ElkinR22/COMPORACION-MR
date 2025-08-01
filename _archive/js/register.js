document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (registerForm.checkValidity()) {
                // Simulación de un registro exitoso
                alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
                window.location.href = 'login.html';
            }
            registerForm.classList.add('was-validated');
        }, false);
    }
});
