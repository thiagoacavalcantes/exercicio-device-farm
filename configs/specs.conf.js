require ('dotenv').config()

let specsConf = process.env.PLATFORM === 'android' ? {
    specs: [
        './test/specs/login.spec.js'
    ]
} : {
    specs: [
        './test/specs/selecionarProduto.spec.js',
        './test/specs/buscarProduto.spec.js',
        './test/specs/visualizarProduto.spec.js'
    ]
}
    

module.exports = {specsConf}