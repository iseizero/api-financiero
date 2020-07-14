exports.getAllEndpoints = (req, res) => {
    return {
        saludo: 'Hola Mundo'
    }
}


catchError = _err => {
    return res.status(500).send({
        message: _err.message
    });
};