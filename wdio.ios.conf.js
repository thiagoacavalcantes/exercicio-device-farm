import { join } from 'path';
import allure from 'allure-commandline';
import video from 'wdio-video-reporter';

export const config = {
    user: 'oauth-casamenthis-ee5b6',
    key: '*****eab9',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,         
    baseUrl: 'wd/hub',            
    specs: ['./test/specs/**/*.spec.js'],
    suites: { products: [] },
    framework: 'mocha',
    capabilities: [
        {
            platformName: 'iOS',
            'appium:app': 'storage:filename=LojaEBAC-sim.zip',
            'appium:deviceName': 'iPhone Simulator',
            'appium:platformVersion': '17.0',
            'appium:automationName': 'XCUITest',
            'sauce:options': {
                appiumVersion: '2.0.0',
                build: 'Exercicio-29',
                name: 'Teste-01',
                deviceOrientation: 'PORTRAIT',
            }
        }
    ],
    waitforTimeout: 20000,
    mochaOpts: { timeout: 300000 },
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true
        }],
        [video, {
            saveAllVideos: true,
            videoSlowdownMultiplier: 50
        }]
    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', 'allure-results', '--clean']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000);
            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout);
                if (exitCode !== 0) return reject(reportError);
                console.log('Allure report successfully generated');
                resolve();
            });
        });
    },
    afterStep: function (test, scenario, { error }) {
        if (error) driver.takeScreenshot();
    },
    beforeSuite: async function () {
        const state = await driver.queryAppState('');
        if (state !== 4) await driver.launchApp();
    },
    afterSuite: async function () {
        await driver.closeApp();
    },
    maxInstances: 1
};
