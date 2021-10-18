const { application } = require("express");

module.exports = {
    cadastro (req, res) {
        
        let {nota1} = req.body
        var nota12 = 23;

        res.send(nota1);
        
    },

    index (req, res) {
        res.send("Servidor ta ok!");
    },

    exibir(req, res) {
	    res.sendFile(__dirname + '/cadastro.html');
    }
};