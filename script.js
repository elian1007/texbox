// funciones.js
function convertirAMayusculas() {
    var nombreInput = document.getElementById('nombre');
    nombreInput.value = nombreInput.value.toUpperCase();
    nombreInput.setAttribute('data-testid', 'nombre'); // Asegúrate de establecer el data-testid
  }
  
  
  function validarNombre() {
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value.trim();
  
    // Validación: El nombre debe tener al menos 3 caracteres
    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }
  
    // Pruebas unitarias
    console.log('Prueba 1: ' + (nombre === 'JOHN')); // Debería ser true si el nombre está en mayúsculas
    console.log('Prueba 2: ' + (nombre.length >= 3)); // Debería ser true si el nombre tiene al menos 3 caracteres
    console.log('Prueba 3: ' + /^[A-Z]+$/.test(nombre)); // Debería ser true si el nombre está compuesto solo por letras mayúsculas
  
    // Mostrar alerta con el nombre y un grupo (puedes cambiar el grupo según tus necesidades)
    alert('Nombre: ' + nombre + '\nGrupo: A');
  }
  
  module.exports = { convertirAMayusculas, validarNombre };
  