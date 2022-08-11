// eslint-disable-next-line
const webpack = require('webpack');

module.exports = {
    publicPath: '/',
    devServer: {
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Headers': '*',
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS'
        // },
        port: 8080,
        public: 'localhost',
        proxy: {
            '/rest': {
                target: 'https://api.flickr.com/services/rest/',
                // pathRewrite: { '^/rest': '' },
                changeOrigin: true,
                secure: false
            }
        }
    },
    pwa: {
        name: 'basara',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
        // swSrc is required in InjectManifest mode.
            // swSrc: 'src/service-worker.js'
        // ...other Workbox options...
            skipWaiting: true
        }
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [
            {
                R: 'ramda',
                axios: 'axios'
            }
        ]);
        // config.plugin('workbox');
    }
};
