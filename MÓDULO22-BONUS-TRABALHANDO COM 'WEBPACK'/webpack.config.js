const path = require('path');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');




 module.exports = {
    entry: './src/index.js',
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',
    devServer: {
        contentBase: './src'
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
        template: __dirname + '/src/index.html',                     /////////SIM, ESTE CÓDIGO É NECESSÁRIO PARA CONFIGURAR O 'HtmlWebpackPlugin'... ---> vai definir nosso 'index.html' dentro de 'src' COMO O __bASIS__ PARA as alterações produzidas por esse pacote....
         inject: 'body',   
            filename: 'index.html'        }              
        )
    ],
    output: {
        publicPath: '',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].js' ///////USADO NO 'LAZY LOADING'. (você precisa disso para CONSEGUIR NOMEAR OS ARQUIVOS/BUNDLES EXTRAS QUE SÃO CRIADOS QUANDO VOcÊ SETTA SEU REACT APP COMO 'LAZY LOADInG'...)
    },
    resolve: {
        extensions: ['.js', '.jsx'] /////serve para ___FAZER COM QUE O WEBPACK FUNCIONE COM SINTAXE DE IMPORTS ASSIM: 'import BuildControls from './BuildControls', QUE ENTÃO SÃO LIDAS COMO 'Import BuildControls from './BuildCOntrols.js' (OU SEJA, É ADICIONADO O '.js' e '.jsx' AO FINAL DO ARQUIVO AUTOMATICAMENTE, QUANDO NÃO SÃO ENCONTRADAS EXTENSÕES (.js, .jsx) em SUA SINTAXE DE IMPORT...)
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // loader: 'css-loader' /// ESSA SINTAXE É MUITO SIMPLES PARA FAZER COM QUE O IMPORT DE CSS FUNCIONE COM O WEBPACK... -> devemos usar essa sintaxe mais abaixo, de 'use'...
                use: [
                    { loader: 'style-loader'},
                    { loader: require.resolve('css-loader'),  ///estes códigos (dentro de 'use: []') são PARSEADOs E ANALISADOs__ DE BAIXO __ PARA CIMA___...( orientação inversa....) --> e, SIM, A ORDEM IMPORTA, NESSE 'use'...
                       options: {
                           importLoaders: 1, ///idiossincrasia do 'CSS-LOADER'... --> só ele precisa dessa propriedade. Essa propriedade informa A ELE QUANTOS LOADERS VAO SER EXECUTADOS ANTES DELE, DURANTE O RUNTIME... --> no caso, digitamos '1', pq apenas o 'postcss-loader' VAI SER EXECUTADO ANTES DELE...
                           modules: {
                               auto: true,
                               localIdentName: "[name]__[local]___[hash:base64:5]"
                           },
                        //    localIdentName: '[name]_[local]_[hash:base64:5]' ///deprecado. Não existe mais.
                       }  },
                    { loader: 'postcss-loader',

                // options: {
                //     ident: 'postcss',

                //     // plugins: () => [
                //     //     autoprefixer({
                //     //         browsers: [
                //     //             "> 1%",
                //     //             "last 2 versions"
                //     //         ]
                //     //     })
                //     // ]
                // }
            }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                // loader: 'url-loader?limit=8000&name=images/[name].[ext]'
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'images/[name].[ext]'
                }
            }
        ]
    }
}













// {  ///importante: O ARQUIVO DE '.babelrc' SE COMUNICA COM NOSSO 'webpack.config.js'...
//     "presets": [
//         ["env", {
//             "targets": {
//                 "browsers": [
//                     "> 1%",  //ver aula 'introduzindo babel'
//                     "last 2 versions"
//                 ]
//             }
//         }]
//         ,
//         "react"
//     ],
//     "plugins": [
//         "syntax-dynamic-import"
//     ]
// }