const{ChartJSNodeCanvas} = require('chartjs-node-canvas');
const fs = require('fs');
const width = 800; // Ancho del lienzo
const height = 600; // Alto del lienzo
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

async function crearGrafica(nombreArchivo, labels, data) {
    const configuration = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Datos de ejemplo',
                data,
                
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            }
        }
    };

    const imagen = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync(nombreArchivo, imagen);
}

module.exports = {
    crearGrafica
};