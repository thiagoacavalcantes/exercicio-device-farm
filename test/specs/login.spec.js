const guestHomePage = require("../pageobjects/guestHome.page")
const loginPage = require("../pageobjects/login.page")
const myStorePage = require("../pageobjects/myStore.page")

let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'teste@teste.com.br'
let password = 'Teste@123'

describe('Acessar Admin Panel', () => {
    
    it('Deve realizar o login com sucesso', async () => {
        
        await guestHomePage.goToLogin()
        await loginPage.setStoreAdress(url)
        await loginPage.clickContinueButton()
        await loginPage.clickContinueStoreCredentialsButton()
        await loginPage.setLogin(usuario, password)
        await loginPage.clickTwoFactorButton() 
        await loginPage.twoFactorLogin(password)

        expect(await myStorePage.getStoreLogo()).toBeTruthy()
        expect(await myStorePage.getStoreName()).toEqual('EBAC - Shop')       
    });
});