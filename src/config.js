global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';           // Chave interna
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, bem vindo';         // template de e-mail

module.exports = {
    connectionString: 'mongodb://naraku:admin45@ds261521.mlab.com:61521/crud',
    sendgridKey: 'admin',                                          // usar para enviar e-mail
    containerConnetionString: 'admin'                              //usar para salvar as imagens dos produtos
}