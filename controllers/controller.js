const { application } = require("express");

let nomesobrenome,medianotas;
const usuarios = [{nome: nomesobrenome, media: medianotas}];



module.exports = {
    cadastro (req, res) {
        
        let {nome,sobrenome,nota1, nota2} = req.body;

        function verificanota () {
            if (nota1 == " " || nota2 == " ") {
                return false;
            } else {
                medianotas = (nota1+nota2)/2;
                return true;
            }
        }
        
        function verificanome () {
            if (nome == " " || sobrenome == " ") {
                return false;
            } else {
                nomesobrenome = nome + "/" + sobrenome;
                return true;
            }
        }

        if (verificanome() == true && verificanota() == true){
            res.json [{Response: "Aluno cadastrado com sucesso"}];
        } else {
            res.json[{Response: "Cadastro não realizado"}];
        }
    },

    index (req, res) {
        res.send("Servidor ta ok!");
    },

    exibir(req, res) {
	    res.sendFile(__dirname + '/cadastro.html');
    }
};