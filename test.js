const{promedio,desviacionEstandar}=require('./estadisticas.js');
const{crearGrafica}=require('./graficas.js');   

const datos= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log('Promedio:', promedio(datos));
console.log('Desviación estándar:', desviacionEstandar(datos));

crearGrafica('grafica.png', ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'], datos)
    .then(() => console.log('Gráfica creada exitosamente'))
    .catch(err => console.error('Error al crear la gráfica:', err));