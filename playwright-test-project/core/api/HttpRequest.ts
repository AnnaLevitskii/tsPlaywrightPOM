import { expect, request } from '@playwright/test'; 
import { User } from '../utils/models/User.type';
import * as config from '../../core/utils/resources/config.json';
import { resolve } from 'path';


export class HttpRequest{

    async postRequest(any: any, endpoint: string): Promise<Response> {
        const apiContext = await request.newContext();
        const response = await apiContext.post(config.url_api+endpoint, {
            data: any,  
            headers: {
              'Content-Type': 'application/json',  
            },
          });

        if(response.status()>300){
            const err = await response.json();
            throw new Error(err.error);
        }
       
        
        return await response.json();
    }

}