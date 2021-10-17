const { application } = require("express");

module.exports = {
    cadastro (req, res) {
        let {nome, sobrenome} = req.body;

        if( nome == "" || sobrenome == "") {
            res.json({ response: false});
        } else {
           res.json({ response: true, usuario: { nome: nome, sobrenome: sobrenome }}); 
        }
    },

    app(req, res) {
	    res.sendFile(__dirname + 'cadastro.html');
    }
};