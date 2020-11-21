const withOffline = require('next-offline')

const nextConfig = {
    target: 'serverless',
    transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
    // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
    // turn on the SW in dev mode so that we can actually test it
    // generateInDevMode: true,
    images: {
        domains: ['img.youtube.com']
    },
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /.woff2$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'fonts-v1',
                    expiration: { maxAgeSeconds: 300110400 }, // 1 year
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'offlineCache-v2-alpha2',
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

module.exports = withOffline(nextConfig)