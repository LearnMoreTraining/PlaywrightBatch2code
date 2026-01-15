import {test,expect} from "@playwright/test"
import {HomePage} from "../pages/homepage"
import {SearchResultPage} from "../pages/SearchResultPage"


const searchItem : string[] = ['laptop','iphone','mouse']

for(const item of searchItem){

    test('Text Validation in Product page',async ({page})=>{
    await page.goto("https://www.amazon.in/")
    let homePage = new HomePage(page)
    await homePage.enterProductName("laptop")
    await homePage.clickSearchIcon()
   let searchResult = new SearchResultPage(page)
   expect(await searchResult.getResultText()).toEqual("Results")

})
    
}



