
import { test, expect } from '@playwright/test';
import { HttpRequest } from '../core/api/HttpRequest';
import { User } from '../core/utils/models/User.type';
import { TokenResponse } from '../core/utils/models/TokenResponse.type';
import { error } from 'console';



test.describe('registrationApiTests_positive', ()=>{
    test('registrationTest',async ({})=>{
        const user: User = {
            email: "eve.holt@reqres.in", 
            password: "pistol",
        }

        const endpoint = "/api/register"

        await new HttpRequest().postRequest(user, endpoint)
            .then(response => expect(response.token).toEqual("QpwL5tke4Pnpja7X4"));
    }) 
});

test.describe('registrationApiTests_negative', ()=>{
    test('registrationTest_passwordIsNull',async ({})=>{
        const user: User = {
            email: "eve.holt@reqres.in"
        }

        const endpoint = "/api/register"

        await new HttpRequest().postRequest(user, endpoint)
        .catch((error) =>{
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('Missing password');
        })
        
     
              
    })
    
});