const { TurmaController } = require("../controllers/TurmaController");
const express = require("express");
const router = express.Router();

//Rotas GET
router.get("/turmas", TurmaController.verTurmas);
router.get("/turmas/:id", TurmaController.verTurmaPorId);


//Rotas POST
router.post("/turmas", TurmaController.criarTurma);

//Rotas PUT
router.put("/turmas/:id", TurmaController.atualizarTurma);


//Rotas DELETE
router.delete("/turmas/:id", TurmaController.apagarTurma);



module.exports = router;
