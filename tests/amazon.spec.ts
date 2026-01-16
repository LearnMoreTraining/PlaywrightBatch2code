import {test,expect} from "@playwright/test"
import {HomePage} from "../pages/homepage"
import {SearchResultPage} from "../pages/SearchResultPage"

const searchResults : string [] =["iphone","mouse","laptop"]

for(const product of searchResults){
    test(`Text Validation in Product page ${product}`,async ({page})=>{
    await page.goto("https://www.amazon.in/")
    let homePage = new HomePage(page)
    await homePage.enterProductName(product)
    await homePage.clickSearchIcon()
   let searchResult = new SearchResultPage(page)
   expect(await searchResult.getResultText()).toEqual("Results")
   console.log(product)
    })
}


    




