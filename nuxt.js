// nuxt.js
const express = require('express')
const app = express()
const { Nuxt } = require('nuxt')
const path = require('path')

app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))
app.use('/', express.static(path.join(__dirname, '.nuxt', 'dist')))
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
// app.use(nuxt.render)

app.use(async (req, res) => {
    await nuxt.ready();
    nuxt.render(req, res);
});
module.exports = app
