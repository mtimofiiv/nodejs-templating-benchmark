const glob = require('glob')
const Table = require('tty-table')

const { measureTime } = require('./lib/helpers')
const hbs = require('./engines/hbs')
const liquid = require('./engines/liquid')

const compileContext = require('./config/data')
const engineRunners = glob.sync('./engines/**/index.js')

const run = async () => {
  const engines = []

  for (const engineFile of engineRunners) {
    const engine = require(engineFile)
    let prep

    if (engine.prep) prep = await engine.prep()

    const result = await measureTime(engine.render, [ prep, compileContext ])

    engines.push({ ...result, name: engine.name })
  }

  return engines
}

run().then(results => {
  const resultTable = Table([
    {
      value: 'name',
      alias: 'Templating Engine'
    },
    {
      value: 'elapsedTime',
      alias: 'Rendering Speed (ms)'
    }
  ], results)

  console.log(resultTable.render())

  process.exit()
}).catch(error => {
  console.error(error)
  process.exit(2)
})
