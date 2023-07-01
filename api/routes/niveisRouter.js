const express = require("express");
const NivelController = require("../controllers/NivelController");
const router = express.Router();

//Rotas GET
router.get("/niveis", NivelController.pegaTodosOsNiveis);
router.get("/niveis/:id", NivelController.verNivelPorId);


//Rotas POST
router.post("/niveis", NivelController.criarNivel);


//Rotas PUT
router.put("/niveis/:id", NivelController.atualizarNivel);


//Rotas DELETE
router.delete("/niveis/:id", NivelController.apagaNivel);



module.exports = router;