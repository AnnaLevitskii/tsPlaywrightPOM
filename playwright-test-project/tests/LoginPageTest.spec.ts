import { test, expect } from '@playwright/test';
import { HomePage } from '../core/ui/pages/HomePage';
import { LoginPage } from '../core/ui/pages/LoginPage';
import { faker } from '@faker-js/faker';
import { User } from '../core/utils/models/User.type';

test.describe('loginTests_positive', ()=>{
    
    test('loginTest',async ({page})=>{
        test.slow();
        await new HomePage(page).openHomePage()
            .then(HomePage => HomePage.navigateToLoginPage())
            .then(LoginPage => LoginPage.fillinLoginForm());
        await expect(page.getByRole('link', { name: 'CONTACTS' })).toBeVisible();
    })
    
    test('loginTest_storageCheck',async ({page})=>{
        test.slow();
        await new HomePage(page).openHomePage()
            .then(HomePage => HomePage.navigateToLoginPage())
            .then(LoginPage => LoginPage.fillinLoginForm());
        
        const storage = await page.context().storageState();
        const token = storage.origins.find(srot => srot.localStorage.find(ls => ls.name =='token'));
        expect(token).toBeTruthy();
        expect(token).not.toBeNull();
    })

})

test.describe('loginTests_negative', ()=>{

    test('loginTest_notRegisteredUser',async ({page})=>{

        const randomPassword = faker.internet.password()
        const randomEmail = faker.internet.email();
        const user: User = {
            email: randomEmail, 
            password: randomPassword,
        } 

        await new HomePage(page).openHomePage()
            .then(HomePage => HomePage.navigateToLoginPage())
            .then(LoginPage => LoginPage.fillinLoginForm_negative(user));
        await expect(page.getByRole('link', { name: 'CONTACTS' })).not.toBeVisible();
    })

    test('loginTest_invalidEmail',async ({page})=>{

        const randomPassword = faker.internet.password()
        const randomEmail = faker.internet.email().split('@').join('');
        
        const user: User = {
            email: randomEmail, 
            password: randomPassword,
        } 
        
        await new HomePage(page).openHomePage()
            .then(HomePage => HomePage.navigateToLoginPage())
            .then(LoginPage => LoginPage.fillinLoginForm_negative(user));
        await expect(page.getByRole('link', { name: 'CONTACTS' })).not.toBeVisible();
    })



})