const express = require("express");
const { PessoaController } = require("../controllers/PessoaController");
router = express.Router();


//Rotas GET
router.get("/pessoas", PessoaController.verPessoas);
router.get("/pessoas/:id", PessoaController.verPessoaPorId);
router.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.verUmaMatricula);
router.get("/pessoas/:estudanteId/matricula", PessoaController.verMatriculas);


//Rotas POST
router.post("/pessoas", PessoaController.criarPessoa);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula);


//Rotas PUT
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizarMatricula);


//Rotas DELETE
router.delete("/pessoas/:id", PessoaController.apagaPessoa);
router.delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.apagaMatricula);


module.exports = router;