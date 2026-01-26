import {test} from '@playwright/test'
import {TestConfig} from '../test.config'
import {Login} from '../pages/login'
import {RandomDataUtil} from '../utils/randomGenerator'

    let config:TestConfig;
    let login:Login;

test.beforeEach('login step',async({page})=>{

     config = new TestConfig;
     login =  new Login(page)
     await  page.goto(config.appURL)
})

test('error message validation',{tag:'@Regression'},async ()=>{
   await  login.enterUsername(RandomDataUtil.getFirstName())
   await login.enterPassword(RandomDataUtil.getRandomPassword(8))
   await  login.clickLoginButton()

})

test('login function',{tag:'@smoke'},async()=>{
  await   login.enterUsername(RandomDataUtil.getFirstName())
  await  login.enterPassword(RandomDataUtil.getRandomPassword(8))
  await  login.clickLoginButton()
})