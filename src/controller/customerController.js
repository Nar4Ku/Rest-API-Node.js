var ValidationContract = require('../validators/validator');
var repository = require('../repositories/customer-repository');
var md5 = require('md5');

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter ao menos 3 carateres');
    contract.isEmail(req.body.email, 'O email é inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter ao menos 6 carateres');

    // Caso os dados sejam inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
        });
        
        res.status(201).send({
            message: 'Cliente cadastrado'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha no processamento da requisição'
        });
    }
}