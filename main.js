
/* Essas duas linhas de código criam uma instância da API de reconhecimento de voz do navegador, permitindo que o usuário interaja 
com a página web por meio da fala. A primeira linha define uma variável que representa a classe de reconhecimento de fala, e a 
segunda linha cria uma instância dessa classe para ser usada na página.*/

/*Este código utiliza a API de reconhecimento de voz do navegador para capturar comandos de voz e realizar ações baseadas neles.

A primeira linha declara uma variável "SpeechRecognition" que contém a classe "webkitSpeechRecognition" que é utilizada para criar um novo objeto "recognition".

A função "start" é chamada quando o botão correspondente é clicado. Essa função limpa a caixa de texto e inicia o reconhecimento de voz.

A função "onresult" é acionada quando a fala é reconhecida. Ela recebe um evento como parâmetro que contém o texto reconhecido e outras informações. A transcrição é armazenada na variável "Content" e exibida na caixa de texto.

Se o conteúdo da transcrição for "tire minha selfie", a função "speak" é chamada para capturar uma imagem usando a câmera do dispositivo. */
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 

recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}








 ///LINHA 59 
camera = document.getElementById("camera");
//camera: variável
//document.getElementById; pegar elemento pelo id
//("camera") id da camera criada no html
Webcam.set({
    width:360, //largura 
    height:250, //altura 
    image_format : 'jpeg',//formato da imagem 
    jpeg_quality:90 // qualidade da imagem
});














function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}


/* A função "speak" utiliza a API de síntese de voz do navegador para reproduzir uma mensagem
 de áudio, em seguida, ela utiliza a biblioteca "Webcam.js" para acessar a câmera do 
 dispositivo e capturar uma imagem. Após 5 segundos, a função "take_snapshot" é chamada para 
 tirar a foto, e a função "save" é chamada para salvar a imagem capturada em um link que pode 
 ser baixado pelo usuário. A imagem também é exibida na página, substituindo o conteúdo anterior.

Em resumo, esse código é um exemplo de como utilizar a API de reconhecimento de voz do 
navegador e a biblioteca "Webcam.js" para capturar imagens usando a câmera do dispositivo.
 Ele pode ser utilizado como base para a criação de aplicativos que utilizam reconhecimento 
 de voz para realizar ações específicas.
 
 Essa função é responsável por salvar a imagem capturada pela câmera do dispositivo após o reconhecimento da voz.

Ela começa declarando a variável "link" que recebe o elemento HTML com o ID "link", que será usado para
disponibilizar a imagem para download. A variável "image" recebe o atributo "src" do elemento
 HTML com o ID "selfie_image", que contém a imagem capturada pela câmera.

Em seguida, a função atribui o valor da variável "image" ao atributo "href" da variável "link".
 Finalmente, ela chama o método "click" da variável "link" para iniciar o download da imagem.*/