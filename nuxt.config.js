
// nuxt.config.js
module.exports = {
    mode: 'universal',
    head: {
        title: 'Vue Nuxt Test',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            {
                rel:'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
            }
        ]
    },
    build: {
        vendor: ['axios'],
        publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/`
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
