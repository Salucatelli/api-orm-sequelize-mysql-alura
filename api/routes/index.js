const pessoas = require("./pessoasRoutes");
const turmas = require("./turmasRoutes");
const niveis = require("./niveisRouter");
const express = require("express");
const bodyParser = require("body-parser");

const router = (app) => {
    app.use(
        express.json(),
        bodyParser.json(),
        pessoas,
        turmas,
        niveis
    )
}

module.exports = router;