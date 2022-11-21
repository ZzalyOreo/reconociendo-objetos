Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camara = document.getElementById("camara");
Webcam.attach('#camara');

function capturarImagen() {
    Webcam.snap(function (data_uri) {
        document.getElementById("resultado").innerHTML = "<img id='imagenCapturada' src='" + data_uri + "'/>";
    });
}

console.log('ml5 version:', ml5.version);

reconocerObjeto = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GqdNkXZLc/model.json', modeloListo);

function modeloListo() {
    console.log("Modelo listo");
}

function identificarImagen() {
    imagen = document.getElementById('imagenCapturada');
    reconocerObjeto.classify(imagen, obtenerResultado);
}


function obtenerResultado(error, resultados) {
    if (error) {
        console.error(error);
    } else {
        console.log(resultados);
        document.getElementById("objetoDetectado").innerHTML = resultados[0].label;
        document.getElementById("precisionDetectada").innerHTML = resultados[0].confidence.toFixed(3);
    }
}
