import {test,expect} from "@playwright/test"
import fs from 'fs'
import {parse} from 'csv-parse/sync'

const csvpath = "testdata/logindata.csv"

const loginData = fs.readFileSync(csvpath,'utf-8')

type loginCSVData ={
    email: string,
    password: string
}

const record = parse(loginData,
    {
        columns:true,
        skip_empty_lines:true
    }
) as loginCSVData[]


for(const data of record){

    test(`login validation with ${data.email} and ${data.password}`, async ({page})=>{

  await page.goto("https://login.salesforce.com/")
  await page.locator("#username").fill(data.email)
  await page.locator("#password").fill(data.password)
  console.log(data.email)
   console.log(data.password)
})
}