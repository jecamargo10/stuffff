const express = require('express');

let app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('src'));
app.listen(PORT, function() {
  console.log('node app is running on port', PORT)
})