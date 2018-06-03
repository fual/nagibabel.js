const rimraf = require('rimraf')
const minimist = require('minimist')

const projectDir = process.cwd()
const args = minimist(process.argv.slice(2))

const pathToDelete = args.path || projectDir

rimraf(pathToDelete, () => {
  console.log('All bad code is cleared.')
})
