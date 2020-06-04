let fs = require('fs');

let file = "touchpiano.wav"

let read = fs.createReadStream(file)

fs.stat(file, (err ,stats) => {

  let total = stats.size
   
  let progress = 0 ;

 

  read.on('data', (chunk) => {
    
    
     progress += chunk.length 

     console.log("J'ai lu " + Math.round(100 * progress / total ) + "%" );
     
  })
  
  read.on('end', () => {
    console.log("J'ai fini de lire le fichier");
    
  })

})
