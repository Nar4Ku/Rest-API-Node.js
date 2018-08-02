var ValidationContract = require('../validators/validator');
var repository = require('../repositories/product-repository');

//Funções básicas Crud
exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}

exports.getBySlug = async (req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}

exports.getByTag = async (req, res, next) => {
    try {
        var data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter ao menos 3 carateres');
    contract.hasMinLen(req.body.slug, 3, 'O título deve conter ao menos 3 carateres');
    contract.hasMinLen(req.body.descripiton, 3, 'O título deve conter ao menos 3 carateres');

    // Caso os dados sejam inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Produto cadastrado'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com êxito!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.body.id);
        res.status(201).send({
            message: 'Produto removido com êxito!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}