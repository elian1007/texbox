// __tests__/funciones.test.js
const { screen } = require('@testing-library/dom');
require('@testing-library/jest-dom');

// Importa tus funciones
const { convertirAMayusculas, validarNombre } = require('../script');

test('convertirAMayusculas convierte correctamente a mayúsculas', () => {
  document.body.innerHTML = '<input id="nombre" data-testid="nombre" value="john" />';
  convertirAMayusculas();
  expect(screen.getByTestId('nombre')).toHaveValue('JOHN');
});


test('validarNombre muestra alerta si el nombre tiene menos de 3 caracteres', () => {
  document.body.innerHTML = '<input id="nombre" value="jo" />';
  jest.spyOn(window, 'alert').mockImplementation(() => {});

  validarNombre();

  expect(window.alert).toHaveBeenCalledWith('El nombre debe tener al menos 3 caracteres.');
});

test(' el nombre está compuesto solo por letras mayúsculas', () => {
  const nombre = 'JOHN';
  const expresionRegular = /^[A-Z]+$/;
  expect(expresionRegular.test(nombre)).toBe(true);
});
