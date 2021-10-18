const { application } = require("express");

let nomesobrenome, medianotas;
const usuarios = [{ nome: nomesobrenome, media: medianotas }];



module.exports = {
    cadastro(req, res) {

        let { nome, sobrenome, nota1, nota2 } = req.body;
        

        if (nome == "" || sobrenome == "" || nota1 == "" || nota2 == "") {
            res.json({ Response: false });
        } else {
            medianotas = (Number(nota1)+Number(nota2))/2;
            nomesobrenome = nome + "/" + sobrenome;
            res.json({Response : "Usuário cadastrado", nome: nomesobrenome, media: medianotas});
        }
    },

    index(req, res) {
        res.send("Servidor ta ok!");
    },

    exibir(req, res) {
        res.sendFile(__dirname + '/cadastro.html');
    }
};