const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'build')));

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')))



app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});