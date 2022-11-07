const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(4000, function() {
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Coinflip.html')
})

 
const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
 fs.readFile('/Coinflip.html', function(err, data) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(data);
   res.end();
 });
})