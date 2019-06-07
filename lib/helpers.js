const { open } = require('fs').promises

exports.measureTime = async (functionToMeasure, functionArgs = []) => {
  const start = new Date()
  const result = await functionToMeasure(...functionArgs)
  const end = new Date()

  return { elapsedTime: end - start, result }
}

exports.loadFile = async filename => {
  let fileHandle

  try {
    fileHandle = await open(filename, 'r')
    const contents = await fileHandle.readFile({ encoding: 'utf8' })

    return contents
  } catch (error) {
    console.error(error)
    throw new Error(`=> loadFile() of ${filename} has failed.`)
  } finally {
    if (fileHandle) fileHandle.close()
  }
}
