import{ expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import * as config from '../../../core/utils/resources/config.json';
import { HeaderMenu } from "../../utils/models/HeaderMenu.enum";
import { LoginPage } from "./LoginPage";

export class HomePage extends BasePage{
    constructor(public page: Page){
        super(page);
    }
    
    async openHomePage(): Promise<this> {
        await this.page.goto(config.url_ui); 
        return this;
    }
    async navigateToLoginPage(): Promise<LoginPage>{
        await HomePage.headerMenuNavigate(HeaderMenu.Login);
        return new LoginPage(this.page);
    }
}