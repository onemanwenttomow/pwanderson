
// nuxt.config.js
module.exports = {
    mode: 'universal',
    head: {
        title: 'PWAnderson.com - Full Stack Developer - Berlin',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'PWAnderson.com - Full Stack Developer - Berlin' },
            { hid:'og:image', name:'og:image', content:'http://euro-travel-example.com/thumbnail.jpg'}

        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://s3.amazonaws.com/pwanderson/apple-touch-icon.png'},
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://s3.amazonaws.com/pwanderson/favicon-32x32.png'},
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://s3.amazonaws.com/pwanderson/favicon-16x16.png'},
            { rel: 'icon', type: 'image/x-icon', href: 'https://s3.amazonaws.com/pwanderson/favicon.ico'},
            { rel:'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' }
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
