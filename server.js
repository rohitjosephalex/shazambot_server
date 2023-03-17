const express = require('express');
const app = express();
const port = 8080;

const indexRouter = require('./routes/Index');


app.get('/', (req, res) => {
    res.status(200).send(`shazam_bot server is running on Node js ¯\\_(ツ)_/¯`);

});

app.use('/api', indexRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));