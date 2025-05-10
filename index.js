const express = require("express");

const app = express();

app.use(express.json());

app.get("/get-req", async function (req, res) {

    console.log("Hello Get request");

    res.status(200).json({
        msg:"Request hit successfully"

    })

})