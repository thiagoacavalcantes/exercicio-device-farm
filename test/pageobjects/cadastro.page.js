import { $ } from '@wdio/globals'

class CadastroPage {
    get btnSign () {
        return $('android=new UiSelector().text("Sign up")')
     }
 get firstName () {
    return $('id:firstName')
 }

 get lastName () {
    return $('id:lastName')
 }

 get phone () {
    return $('android=new UiSelector().resourceId("phone")')
 }

 get emailAdress () {
    return $('android=new UiSelector().resourceId("email")')
 }

 get password () {
    return $('android=new UiSelector().resourceId("password")')
 }

 get rePassword () {
    return $('id:repassword')
 }

 get btnCreate () {
    return $('android=new UiSelector().resourceId("create")')
 }

 async cadastro(firstName, lastName, phone, emailAdress, password, rePassword) {
    await this.btnSign.click()
    await this.firstName.setValue(firstName)
    await this.lastName.setValue(lastName)
    await this.phone.setValue(phone)
    await this.emailAdress.setValue(emailAdress)
    await this.password.setValue(password)
    await this.rePassword.setValue(rePassword)
    await this.btnCreate.click()
 }
}

export default new CadastroPage();