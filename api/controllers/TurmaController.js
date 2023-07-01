const database = require("../models");

class TurmaController {
    static async verTurmas(req, res, next) {
        try {
            const data = await database.Turmas.findAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async verTurmaPorId(req, res, next) {
        const id = req.params.id;
        try {
            const data = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarTurma(req, res, next) {
        const novaTurma = req.body;
        try {
            const data = await database.Turmas.create(novaTurma);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarTurma(req, res, next) {
        const id = req.params.id;
        const novaTurma = req.body;
        try {
            await database.Turmas.update(novaTurma, { where: { id: Number(id) } });
            const data = await database.Turmas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagarTurma(req, res, next) {
        const id = req.params.id;
        try {
            await database.Turmas.destroy({ where: { id: Number(id) } });
            return res.status(200).send(`Turma ${id} apagada com sucesso!`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}


module.exports = { TurmaController };
