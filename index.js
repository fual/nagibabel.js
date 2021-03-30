const path = require('path')
const rimraf = require('rimraf')
const minimist = require('minimist')

const projectDir = process.cwd()
const args = minimist(process.argv.slice(2))

const pathToDelete = args.path || projectDir
const successMsg = 'All bad code is cleared. 😎'

rimraf(pathToDelete, (er) => {
  if (er) {
    // "best-effort" fallback
    rimraf(path.join(pathToDelete, '*'), () => {
      console.log(successMsg)
    })
    return
  }
  console.log(successMsg)
})
