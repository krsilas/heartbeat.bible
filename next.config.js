const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

const nextConfig = {
    target: 'serverless',
    transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                        maxEntries: 200,
                    },
                },
            } ,
        ],
    },
  };

//module.exports = withOffline(withCSS(nextConfig))
module.exports = withCSS({})