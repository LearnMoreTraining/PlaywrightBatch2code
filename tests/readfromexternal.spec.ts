import {test,expect} from "@playwright/test"
import fs from 'fs'

const jsonpath = "testdata/logindata.json"

const loginData = JSON.parse(fs.readFileSync(jsonpath,'utf-8'))


for(const {email,password} of loginData){

    test(`login validation with ${email} and ${password}`, async ({page})=>{

  await page.goto("https://login.salesforce.com/")
  await page.locator("#username").fill(email)
  await page.locator("#password").fill(password)
  console.log(email)
   console.log(password)
})
}