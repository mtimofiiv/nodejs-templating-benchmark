const Liquid = require('liquidjs')

const engine = new Liquid({
  root: './engines/liquid/',
  extname: '.liquid'
})

exports.name = 'Liquid'

exports.render = (_, context) => engine.renderFile('template', context)
