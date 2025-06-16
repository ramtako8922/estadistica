function promedio(arr) {
    If (!Array.isArray(arr) || arr.length===0) // Evitar división por cero
    return arr.reduce((a, b) => a + b, 0) / arr.length;
    
}

function desviacionEstandar(arr) {
    const media = promedio(arr);
    
    const sumaCuadrados = arr.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
    return Math.sqrt(sumaCuadrados / (arr.length ));
    
}

module.exports = {
    promedio,
    desviacionEstandar
};
