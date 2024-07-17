import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactsPage extends BasePage{
    constructor(public page: Page){
        super(page);
    }



}