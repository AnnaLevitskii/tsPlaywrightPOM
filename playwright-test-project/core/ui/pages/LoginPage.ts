import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import * as config from '../../../core/utils/resources/config.json';
import { ContactsPage } from "./ContactsPage";
import { faker } from '@faker-js/faker';
import { User } from "../../utils/models/User.type";
import { throws } from "assert";

export class LoginPage extends BasePage{
    constructor(public page: Page){
        super(page);
    }

    async fillinLoginForm(): Promise<ContactsPage> {
        await this.page.getByPlaceholder('Email').fill(config.userName);
        await this.page.getByPlaceholder('Password').fill(config.password);
        await this.page.getByRole('button', {name: 'Login'}).click();
        return new ContactsPage(this.page);
    }

    async fillinLoginForm_negative(user: User): Promise<ContactsPage> {
        await this.page.getByPlaceholder('Email').fill(user.email);
        await this.page.getByPlaceholder('Password').fill(user.email);
        await this.page.getByRole('button', {name: 'Login'}).click();
        return new ContactsPage(this.page);
    }

    
    
    async trowsError() {
        throw new Error("My error"); 
    }


}