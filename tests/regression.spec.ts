import {test,expect} from "@playwright/test"

const loginTestData : string [] [] =[

    ["abc@gmail.com", "78670"],
    ["zyz@gmail.com", "abc"],
    ["uuu@gmail.com", "1234"]
]

for(const [username,password] of loginTestData){

    test(`login validation with ${username} and ${password}`, async ({page})=>{

  await page.goto("https://login.salesforce.com/")
  await page.locator("#username").fill(username)
  await page.locator("#password").fill(password)
  console.log(username)
   console.log(password)
})
}

