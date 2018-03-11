const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello from Express'});
});

app.post('/places', (req, res) => {
    console.log("YOOOOOOOOOOOO");
});

app.listen(port, () => console.log(`Listening on port ${port}`));