import {Page,Locator} from "@playwright/test"

export class HomePage{

   private readonly page:Page
   private searchIconLocator:Locator
   private enterProductNameAttribute:string

    constructor(page:Page){
        this.page = page
        this.searchIconLocator = this.page.locator("[type='submit']")
        this.enterProductNameAttribute = "Search Amazon.in"
    }

    //Action method 

    public async enterProductName(productName:string):Promise<void>{
        await this.page.getByPlaceholder(this.enterProductNameAttribute).fill(productName)
    }

    public async clickSearchIcon():Promise<void>{
          await this.searchIconLocator.click({force:true})
    }

    public async clickBabyWishList(){
         await this.page.locator("#nav-link-accountList-nav-line-1").hover()
         await this.page.getByRole('link',{name:'Baby Wishlist'}).click()

    }

}