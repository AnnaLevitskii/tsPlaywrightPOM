
import{ expect, Page } from "@playwright/test";
import { HeaderMenu } from '../../../core/utils/models/HeaderMenu.enum.ts'; 



export abstract class BasePage {
    protected static page: Page;
    constructor(page: Page){
        BasePage.page = page;
    }

    

    public static async headerMenuNavigate(hm: HeaderMenu): Promise<void>{
        switch(hm){
            case HeaderMenu.Home: 
                BasePage.page.getByRole('link', { name: 'HOME' }).click();
                break;
            case HeaderMenu.About: 
                BasePage.page.getByRole('link', { name: 'ABOUT' }).click();
                break;
            case HeaderMenu.Login: 
                BasePage.page.getByRole('link', { name: 'LOGIN' }).click();
                break;
            case HeaderMenu.Add: 
                BasePage.page.getByRole('link', { name: 'ADD' }).click();
                break;
            case HeaderMenu.Contacts: 
                BasePage.page.getByRole('link', { name: 'CONTACTS' }).click();    
                break;
        }
    }
    public static async singOut(){
        this.page.getByRole('button', {name: 'Sign Out'})
    }


}