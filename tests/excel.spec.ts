import {test,expect} from "@playwright/test"
import fs from 'fs'
import {parse} from 'csv-parse/sync'
import XLSX from 'xlsx'

const excelpath = "testdata/datsheet.xlsx"

const file = fs.readFileSync(excelpath)

//Workbook - sheet - value 

  const workbook =  XLSX.read(file)
  const sheetName =  workbook.SheetNames[0]
  const worksheet = workbook.Sheets[sheetName]

  const record:any =  XLSX.utils.sheet_to_json(worksheet)

for(const {email,password} of record){

    test(`login validation with ${email} and ${password}`, async ({page})=>{

  await page.goto("https://login.salesforce.com/")
  await page.locator("#username").fill(email)
  await page.locator("#password").fill(password)
  console.log(email)
   console.log(password)
})
}