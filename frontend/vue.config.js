
module.exports = {
    devServer: {
        port: 3000,
        clientLogLevel: 'info',
        headers: { "Access-Control-Allow-Origin": "*" },
        host: '0.0.0.0',
        proxy: 'http://localhost:8080'
    },
    publicPath: '/',
    outputDir: '../src/main/resources/static',

}
