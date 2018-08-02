// Lista de erros
let errors = [];
// função que consulta os erros
function ValidationContract() {
    errors = [];
}
//métodos 
ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}
//lista de erros
ValidationContract.prototype.errors = () => {
    return errors;
}
//clear
ValidationContract.prototype.clear = () => {
    errors = [];
}
//validador 
ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;