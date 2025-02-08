// Función principal para manejar la redirección
function manejarRedireccion() {
    if (esBot()) {
        // Si es un bot, no hacemos nada
        return;
    }

    // Eliminar la verificación de localStorage y cookies
    // const clave = 'nombreUsuario';
    // const usuarioAlmacenado = localStorage.getItem(clave);
    // const hayCookies = document.cookie.length > 0;

    // Redirigir directamente sin verificar datos
    window.location.href = 'https://plebe2.web.app/';
    
    // Eliminar el mensaje de consola
    // console.log("No hay datos en localStorage ni cookies. Manteniéndose en plebe1.web.app/");
}

// Ejecutar la función al cargar el script
manejarRedireccion();
