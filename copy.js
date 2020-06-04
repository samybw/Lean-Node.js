let fs = require('fs');

let file = "touchpiano.wav"

let read = fs.createReadStream(file)

fs.stat(file, (err ,stats) => {

  let total = stats.size
   
  let progress = 0 ;

  let write = fs.createWriteStream('copypiano.wav')

  read.on('data', (chunk) => {
    
    
     progress += chunk.length 

     console.log("J'ai lu " + Math.round(100 * progress / total ) + "%" );
     
  })
  
  read.pipe(write)
  write.on('finish', () => {
    console.log('Le fichier a bien été copié');
    
  })
})
