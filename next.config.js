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
                    cacheName: 'offlineCache-v2.0.0',
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
		async rewrites() {
			return [
				{
					source: "/bee.js",
					destination: "https://cdn.splitbee.io/sb.js",
				},
				{
					source: "/_hive/:slug",
					destination: "https://hive.splitbee.io/:slug",
				},
			];
		},
};

module.exports = withOffline(nextConfig)