import { $ } from '@wdio/globals'

class LoginPage {
 get email () {
    return $('id:email') // ID
 }
 get password () {
    return $('android=new UiSelector().text("Password")') // android uiautomator
 }
 get btnLogin () {
    return $('~Login') // accessibility id
 }

 async login(email, password) {
    await this.email.setValue(email)
    await this.password.setValue(password)
    await this.btnLogin.click()
 }
}

export default new LoginPage();
