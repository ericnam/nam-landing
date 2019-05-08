const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { port, environment } = require('./config/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require('./routes/routes.index.js')(app);

app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(environment === 'Production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'client/build/index.html'));
  })
}
else
{        
    //build mode
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/public/index.html'));
    })  
}


app.listen(port, (req, res) => {
    console.log(`Server listening on port: ${port}`);
});
