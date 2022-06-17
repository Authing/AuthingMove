const minimist = require('minimist')
const shelljs = require('shelljs')

module.exports = async function () {
  const args = process.argv.slice(2)
  const parsedArgs = minimist(args)

  const [,targetName] = parsedArgs._
  
  const remoteRepo = 'git@github.com:Authing/authingmove-template.git'
  const currentName = 'authingmove-template'
  shelljs.exec(`
    git clone ${remoteRepo}
    mv ${currentName} ${targetName}
    rm -rf ./${targetName}/.git
    cd ${targetName}
    npm ci
  `, (error) => {
    if (error) {
      console.error(`authingmove-cli error: ${error}`)
    }
  })
}
