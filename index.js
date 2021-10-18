const express = require('express');
const app = express();
const routes = require("./routes/route");

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/", routes);

app.listen(8080, () => {
    console.log('Servidor online');
});