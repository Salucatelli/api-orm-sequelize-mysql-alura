const database = require("../models");

class PessoaController {
    static async verPessoas(req, res, next) {
        try {
            const pessoas = await database.Pessoas.findAll();
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async verPessoaPorId(req, res, next) {
        const id = req.params.id;
        try {
            const data = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarPessoa(req, res, next) {
        const novaPessoa = req.body;
        try {
            const data = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarPessoa(req, res, next) {
        const novasInfos = req.body;
        const id = req.params.id;
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
            const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req, res, next) {
        const id = req.params.id
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: "Apagado com sucesso!" });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //MATRICULAS
    //'''''''''''''''''''''''''''''''''''''''''''''''''


    static async verMatriculas(req, res, next) {
        const { estudanteId } = req.params;
        try {
            const data = await database.Matriculas.findAll({
                where: {
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async verUmaMatricula(req, res, next) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const data = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criarMatricula(req, res, next) {
        const id = req.params.estudanteId;
        const novaMatricula = { ...req.body, estudante_id: Number(id) }
        try {
            const data = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarMatricula(req, res, next) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    estudante_id: Number(estudanteId),
                    id: Number(matriculaId)
                }
            });
            const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matriculaId) } });
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaMatricula(req, res, next) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json({ message: "Apagado com sucesso!" });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = { PessoaController }