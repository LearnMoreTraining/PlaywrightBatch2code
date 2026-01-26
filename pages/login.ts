import {Page,Locator} from "@playwright/test"
export class Login{

   private readonly page:Page
   private usernameTextBox:Locator
   private passwordTextBox:string
   private loginButton:Locator
   private errorMessageText:Locator

    constructor(page:Page){
        this.page = page
        this.usernameTextBox = this.page.locator("#username")
        this.passwordTextBox = "#password"
        this.loginButton = this.page.locator("#Login")
        this.errorMessageText = this.page.locator("#error")
    }

    //Action method 

    public async enterUsername(username:string){
      await this.usernameTextBox.fill(username)
    }

    public async enterPassword(password:string){
       await this.page.locator(this.passwordTextBox).fill(password)
    }

    public async clickLoginButton(){
       await this.loginButton.click()
    }

    public async getErrorMessage(){

      return await this.errorMessageText.innerText()
    }



    
}


