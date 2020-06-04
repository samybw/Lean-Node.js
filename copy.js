let fs = require ('fs');

fs.readFile('touchpiano.wav',(err,data) => {
  if (err) throw err
  fs.writeFile('copypiano.waw', data,(err) => {
    if (err) throw err

    console.log('Le fichier a bien etait copier !');
    
  })
})