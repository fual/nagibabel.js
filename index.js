const rimraf = require('rimraf')
const ora = require('ora')
const minimist = require('minimist')
const timeout = require('./lib/timeout')
const randomInt = require('./lib/randomInt')

const args = minimist(process.argv.slice(2))
const pathToDelete = args.path || process.cwd()
const steps = [
  'Searching for code smell source',
  'Analyzing code base',
  'Searching optimal solution',
  'Preparing internal tools'
]

;(() => {
  const spinner = ora().start()

  function nextStage() {
    return timeout(() => {
      spinner.succeed(steps.splice(0, 1)).frame()
    }, randomInt(250, 1500))
  }

  return nextStage()
    .then(nextStage)
    .then(nextStage)
    .then(nextStage)
    .then(() => timeout(() => {
      rimraf(pathToDelete, () => {
        console.info('All bad code is cleared! 😎')
      })
      process.exit(0)
    }, randomInt(1000, 2500)))
})()
