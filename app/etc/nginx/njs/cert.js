function setHeader (req) {
    var pem_cert = req.variables.ssl_client_raw_cert;
    return pem_cert;
}

export default { setHeader };