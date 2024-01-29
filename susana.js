var gataAtual="gatinha_comunista.jpg";
var gataAnterior="su_comunista.jpg";

var memeAtual="gato_zoiudo.jpg";
var memeAnterior="meme_vegano.jpg";

var faculAtual="img_usp.jpg";
var faculAnterior="img_unicamp.jpg";

function Infos(){
    alert("Vai clicando nas coisas pra ver se acontece alguma coisa");
    alert("Os formulários assinalados não vão pra lugar nenhum");
    alert("Parabéns, dona Susu 😎");
    alert("Tava com vontade de programar e de dar parabéns; pimba, dois em um lsklskls");
}

function trocarGatas(){
    document.getElementById("su_comunista").src = gataAtual;
    let aux = gataAtual;
    gataAtual = gataAnterior;
    gataAnterior = aux;
}

function trocarMemes(){
    document.getElementById("gato_zoiudo").src = memeAtual;
    let aux = memeAtual;
    memeAtual = memeAnterior;
    memeAnterior = aux;
}

function trocarFacul(){
    document.getElementById("img_usp").src = faculAtual;
    let aux = faculAtual;
    faculAtual = faculAnterior;
    faculAnterior = aux;
}