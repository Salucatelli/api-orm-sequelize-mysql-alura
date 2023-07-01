const database = require("../models");

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async verNivelPorId(req, res, next) {
        const id = req.params.id;
        try {
            const data = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarNivel(req, res, next) {
        const novoNivel = req.body;
        try {
            const data = await database.Niveis.create(novoNivel);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarNivel(req, res, next) {
        const novasInfos = req.body;
        const id = req.params.id;
        try {
            await database.Niveis.update(novasInfos, { where: { id: Number(id) } });
            const nivel = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaNivel(req, res, next) {
        const id = req.params.id
        try {
            await database.Niveis.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: "Apagado com sucesso!" });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NivelController;