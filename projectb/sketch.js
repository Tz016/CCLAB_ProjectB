let mic;
let fft;
let myRec;
let str;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  //createCanvas(600, 600)
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  
   myRec = new p5.SpeechRec(); // new P5.SpeechRec object
   myRec.onResult = showResult;
   myRec.continuous=true;
   myRec.start();
  speech = new p5.Speech(voiceReady); //callback, speech synthesis object
  // speech.onLOad = voiceReady;
  speech.started();
}

function draw() {
  
  //background(51);
  // let vol = mic.getLevel();
  // //ellipse(height/2, width/2, vol*4000, vol*4000);
  // //console.log('volume', vol);
  // //mic.freq(freq);
  // let spectrum = fft.analyze();
  // //people can hear:20-20k; can sound:
  // for (let i=50;i<800;i+=1){
  //   fill(255);
  //   stroke(255);
  //   rect(0.5*i,300,0.5,spectrum[i]*1.5)
  //   }
  // };
  // if((low-high^2)/vol/10000>30 && vol>0.5){
  //   textSize(random(30,40))
  //   fill(255,0,0);
  //   text("MEAN",random(width),random(height))
  // }
  //console.log((low-high^2)/vol/10000);
}


function mousePressed() {
  speech.setVoice('SpeechSynthesisVoice');
  speech.speak(str); // say something
}
function voiceReady() {
    console.log(speech.voices);
  }
  
function showResult(){
  background(0)
  console.log('working');
  fill(255)
  textSize(50);
  textAlign(CENTER);
  var a=str
  str= myRec.resultString
  text(str,width/2,height/2); 
  if (a!=str){
  speech.setVoice('SpeechSynthesisVoice');
  speech.speak(str)
  }
  
}

// let mic;
// let fft;
// let myRec;
// const audioContext = new AudioContext();
// document.addEventListener('click', () => {
//   audioContext.resume().then(() => {
//     console.log('Audio context resumed successfully');
//   });
// });
// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent("canvasContainer");
//   //createCanvas(600, 600)
//   mic = new p5.AudioIn();
//   mic.start();
//   fft = new p5.FFT();
//   fft.setInput(mic);
  
  
//    myRec = new p5.SpeechRec(); // new P5.SpeechRec object
//    myRec.onResult = showResult;
//    myRec.continuous=true;
//    myRec.start();
// }

// function draw() {
  
//   //background(51);
//   let vol = mic.getLevel();
//   //ellipse(height/2, width/2, vol*4000, vol*4000);
//   //console.log('volume', vol);
//   //mic.freq(freq);
//   let spectrum = fft.analyze();
//   //people can hear:20-20k; can sound:
//   low=0
//   high=0
//   for (let i=50;i<800;i+=1){
//     fill(255);
//     stroke(255);
//     rect(0.5*i,300,0.5,spectrum[i]*1.5)
//     if(i<400){
//       low+=spectrum[i]
//     }
//     else{
//       high+=spectrum[i]
//     }
//   };
//   // if((low-high^2)/vol/10000>30 && vol>0.5){
//   //   textSize(random(30,40))
//   //   fill(255,0,0);
//   //   text("MEAN",random(width),random(height))
//   // }
//   //console.log((low-high^2)/vol/10000);


// }

// function showResult(){
//   background(0)
//   console.log('working');
//   fill(255)
//   textSize(32);
//   textAlign(CENTER);
//   text(myRec.resultString,width/2,height/2); 
// }
