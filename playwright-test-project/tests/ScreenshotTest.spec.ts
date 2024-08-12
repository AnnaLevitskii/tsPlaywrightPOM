import { test, expect } from '@playwright/test';
import { HomePage } from '../core/ui/pages/HomePage';

test.describe('screenshotTests_HomePage', ()=>{

    test('screenshotTest',async ({page})=>{
        test.slow();
        await new HomePage(page).openHomePage()
            .then(HomePage => HomePage.screenshotHomePage())
            .then(screenshot => expect(screenshot).toMatchSnapshot('playwright-test-project/core/utils/resources/screenshot.png')
        )
            
    })
})