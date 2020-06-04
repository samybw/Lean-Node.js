let app = require('express')()

app.get('/' , (request, response) => {
  response.send('Tu est a la racine')

})

app.listen(8080)