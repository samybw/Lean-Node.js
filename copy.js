let fs = require ('fs');

let file = "touchpiano.wav"

let read = fs.createReadStream(file)

read.on('data', (chunk)=> {
  console.log("J'ai lu " + chunk.length);
  
})

read.on('end', () => {
  console.log("J'ai fini de lire le fichier");
  
})