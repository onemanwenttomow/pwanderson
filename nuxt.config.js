// nuxt.config.js
module.exports = {
    mode: 'universal',
    head: {
        title: 'Vue Nuxt Test',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Peter W Anderson - Full Stack Developer' }
        ]
    },
    build: {
        postcss: [
            require('tailwindcss')('./tailwind.config'),
            require('autoprefixer')
        ],
        vendor: ['axios'],
        publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/` // <= add the path to the cached files
    },
    css: ['~/assets/css/tailwind.css' ],
    srcDir: 'client/',
    performance: {
        gzip: false
    },
    router: {
        base: `/`
    },
    dev: false
};
