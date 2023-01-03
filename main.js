 var SpeechRecognition = window.webkitSpeechRecognition;
 recog = new SpeechRecognition;


 function beguon() {
     document.getElementById("otxt").innerHTML = "";
     recog.start();
 }

 recog.onresult = function run(event) {
     var content = event.results[0][0].transcript;
     console.log(content);
     document.getElementById("otxt").innerHTML = content;
     if (content == "it is about Drive") {
         spek();
     }
 };

 function spek() {
     synth = window.speechSynthesis;
     txb = "Taking your selfie in 3 seconds";
     ut = new SpeechSynthesisUtterance(txb);
     synth.speak(ut);
     Webcam.attach(camera);
 }

 Webcam.set({
     width: 250,
     height: 250,
     image_format: "png",
     png_quality: 90
 });

 camera = document.getElementById("Webcam_Status")