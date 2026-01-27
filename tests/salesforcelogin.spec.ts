import {test,expect} from '@playwright/test'
import {TestConfig} from '../test.config'
import {Login} from '../pages/login'
import {RandomDataUtil} from '../utils/randomGenerator'
import {HomePage} from '../pages/homepage'
import {DataProvider} from '../utils/dataprovider'

    let config:TestConfig;
    let login:Login;
    let amazonHomePage:HomePage

test.beforeEach('login step',async({page})=>{

     config = new TestConfig;
     login =  new Login(page)
    amazonHomePage = new HomePage(page)
     await  page.goto(config.appURL)
})

test('error message validation @regession @test1',async ()=>{
   await  login.enterUsername(RandomDataUtil.getFirstName())
   await login.enterPassword(RandomDataUtil.getRandomPassword(8))
   await  login.clickLoginButton()
   expect(await login.getErrorMessage()).toEqual("Error: Please check your username and password. If you still can't log in, contact your Salesforce administrator.")
})

test('search function of Amazon',{tag:'@smoke'},async()=>{
    // const filePath = "testdata/product.json"
    // const products= DataProvider.getDataFromJson(filePath)

    const filePath = "testdata/product.csv"
    const products : any = DataProvider.getDataFromCSV(filePath)

    for(const product of products){
      console.log(product.productvalue)
     await amazonHomePage.enterProductName(product.productvalue)
     await amazonHomePage.clickSearchIcon()
    }

      
})