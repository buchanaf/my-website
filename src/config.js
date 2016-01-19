require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT ,
  app: {
    title: 'Alex Buchanan',
    description: "A front-end developer's personal website.",
    head: {
      titleTemplate: 'Alex Buchanan: %s',
      meta: [
        {name: 'description', content: "A front-end developer's personal website."},
      ]
    }
  },

}, environment);