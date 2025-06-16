const{ChartJSNodeCanvas} = require('chartjs-node-canvas');
const fs = require('fs');
const width = 800; // Ancho del lienzo
const height = 600; // Alto del lienzo
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

async function crearGrafica(nombreArchivo, labels, data) {
  const configuration = {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Datos',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    }
  };

  const image = await chartJSNodeCanvas.renderToBuffer(configuration);
  fs.writeFileSync(nombreArchivo, image);
}

module.exports = {
    crearGrafica
};