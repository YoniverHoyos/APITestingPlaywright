import { request, APIRequestContext } from '@playwright/test';
import data from '../../../data.json';
const apiKeyData:string = data.weatherApiKey;

export class Global { 
  petStoreApiContext!: APIRequestContext;
  weatherApiContext!: APIRequestContext;
  orderId!: number;
  apiKey: string = apiKeyData || '';

  async init(): Promise<void> {
    request
    this.petStoreApiContext = await request.newContext({
      baseURL: 'https://petstore.swagger.io/v2/',
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    });
    this.weatherApiContext = await request.newContext({
      baseURL: 'https://api.openweathermap.org/data/2.5/'
    });
  }
}