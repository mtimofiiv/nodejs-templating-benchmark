const Handlebars = require('handlebars')

const { loadFile } = require('../../lib/helpers')

exports.name = 'Handlebars'

exports.prep = async () => {
  const baseTemplate = await loadFile('./engines/hbs/template.hbs')
  const partial = await loadFile('./engines/hbs/partial.hbs')

  Handlebars.registerPartial('page_content', partial)

  return { baseTemplate }
}

exports.render = ({ baseTemplate }, context) => {
  return Handlebars.compile(baseTemplate)(context)
}
