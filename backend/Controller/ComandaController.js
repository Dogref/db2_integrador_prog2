import comanda from "../Model/comanda.js"

async function listar(req, res) {
    await comanda
        .findAll()
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

//Insominia GET: http://localhost:3000/comanda

async function selecionar(req, res) {
    await comanda
        .findByPk(req.params.id_comanda)
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

// Insominia GET: http://localhost:3000/comanda/Id da comanda

async function criar(req, res) {

    if (!req.body.status) {
        req.body.status = 'Aberta';
      }

    if (!req.body.data_abertura) {
        req.body.data_abertura = new Date();
    }

    if (!req.body.data_fechamento) {
        req.body.data_fechamento = null; 
    }

    await comanda
        .create({
            id_usuario: req.body.id_usuario,
            status: req.body.status,
            data_abertura: req.body.data_abertura,
            data_fechamento: req.body.data_fechamento
        })
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

//Insominia POST: http://localhost:3000/comanda

/*
{
  "id_usuario": "1",
  "status": "Aberta",
  "data_abertura": "2024-11-14 15:30:00",
  "data_fechamento": "2024-11-14 15:30:00"
}
*/

/*

async function alterar(req, res) {
    if (!req.body.comanda)
        res.status(500).send("Parametro categoria é obrigatório.");

    await comanda
        .update({
            comanda: req.body.comanda
        },
            {
                where: {
                    idcomanda: req.params.idcomanda
                }
            })
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}

async function excluir(req, res) {
    await comanda
        .destroy(
            {
                where: {
                    idcomanda: req.params.idcomanda
                }
            })
        .then(resultado => { res.status(200).json(resultado) })
        .catch(erro => { res.status(500).json(erro) });
}
*/
export default { listar, selecionar, criar };