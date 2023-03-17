const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require("path");
const fileupload = require('express-fileupload');


const shazam = require('../services/shazam');

router.use(fileupload());

router.get('/hello', async (req, res) => {
    res.status(200).send("Welcome");
});

router.post('/detectsong', async (req, res) => {
    console.log("detectsong")
    const file = req.files.sample
    const savePath = path.join(__dirname, "../");
    //     const date = new Date();
//     let time = date.getTime();
//     let uniqueFilename = `${time}_${file.name}`;
    await file.mv(savePath + "uniqueFilename", function (err, result) {
        if (err) throw err;
        console.log("File uploaded!");
    });
    shazam.songToBase64(savePath,"uniqueFilename")
    // const result = fs.readFileSync(file, 'base64');
    res.status(200).send("success");
});

module.exports = router;