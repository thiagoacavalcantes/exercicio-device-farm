require('dotenv').config()

const { generalConf } = require('./general.conf')

let capabilities = process.env.PLATFORM === 'android' ? {
    capabilities: [{
        platformName: "android",
        "appium:app": "storage:filename=ebacshop.aab",
        "appium:deviceName": "Android GoogleAPI",
        "appium:platformVersion": "14.0",
        "sauce:options": {
          "name": "Teste Login EBAC Android"
        }
      }]
} : {
    capabilities: [{
        platformName: "iOS",
        "appium:app": "storage:filename=LojaEBAC-sim.zip",
        "appium:deviceName": "iPhone Simulator",
        "appium:platformVersion": "current_major",
        "sauce:options": {
          "name": "Teste Login EBAC IOS"
        }
      }]
}

let sauceConf = {
    ...generalConf,
    ...capabilities,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    services: [
        ['sauce', {
            sauceConnect: true,
        }]
    ]
}
module.exports = {sauceConf}