import {Page,Locator} from "@playwright/test"
export class SearchResultPage{
    private readonly page:Page
    private getResultAttribute: string
    constructor(page:Page){
        this.page = page 
        this.getResultAttribute ="[data-cel-widget='MAIN-MESSAGING-1']>span>div>div>h2"
    }

   public async clickProduct(){
        this.page.locator('').click()
    }

    public async getResultText():Promise<string>{
        return await this.page.locator(this.getResultAttribute).innerText()
    }

}