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
                    cacheName: 'offlineCache-v1-beta1',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 200,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200]
                    }
                },
            } ,
        ],
    },
  };

module.exports = withOffline(withCSS(nextConfig))