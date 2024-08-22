import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import storePage from '../pageobjects/store.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login ('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu('profile')
        expect ((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    })

    it.only('Criar cadastro com sucesso', async () => {
        await homePage.openMenu('profile')
        await cadastroPage.cadastro ('Teste', 'EBAC', '11123456789', 'testeebac0004@teste.ebac.br', 'Teste@1234', 'Teste@1234')
        expect ((await storePage.storeName('EBAC Store')).isDisplayed()).toBeTruthy()    
    });
})

