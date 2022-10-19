const { defineConfig } = require("@vue/cli-service");
const { name } = require('./package');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        port: 8081, // 与注册的微应用的entry地址端口号一致
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            chunkLoadingGlobal: `webpackJsonp_${name}`,
        },
    },
});
