document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('¡Inicio de sesión exitoso!');
            window.location.href = 'dashboard.html';
        });
    }
});
