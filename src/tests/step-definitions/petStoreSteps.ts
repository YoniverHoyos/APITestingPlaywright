import { Given, When, Then, Before } from '@cucumber/cucumber';
import { expect, APIResponse } from '@playwright/test';
import { Global } from '../resources/global';

let world: Global;
let response: APIResponse;
let responseBody: any;

Before(async () => {
  world = new Global();
  await world.init();
});


Given('User consult the purchase order with id {string}', async (id: string) => {
  response = await world.petStoreApiContext.get(`store/order/${id}`);
  responseBody = await response.json();
});

Given('User create a purchase order', async () => {
  world.orderId = Math.floor(Math.random() * 1000);

  response = await world.petStoreApiContext.post('store/order', {
    data: {
      id: world.orderId,
      petId: 5,
      quantity: 1,
      status: 'placed',
      complete: true
    }
  });

  responseBody = await response.json();
  expect(response.status()).toBe(200);
});

When('User search the created purchase order', async () => {
  response = await world.petStoreApiContext.get(`store/order/${world.orderId}`);
  responseBody = await response.json();
});

Given('User request the store inventory', async () => {
  response = await world.petStoreApiContext.get('store/inventory');
  responseBody = await response.json();
});

Given('User delete the purchase order created', async () => {

  response = await world.petStoreApiContext.delete(`store/order/${world.orderId}`);
});

Then('the response status should be {int}', async (statusCode: number) => {
  expect(response.status()).toBe(statusCode);
});

Then('the order information should be returned', async () => {
  if(response.status() === 200) {
    expect(responseBody.id).toBeDefined();
    expect(responseBody.petId).toBeDefined();
    expect(responseBody.quantity).toBeDefined();
  }
});

Then('the created order should be returned', async () => {
  expect(responseBody.id).toBe(world.orderId);
  expect(responseBody.status).toBe('placed');
});

Then('the inventory information should be returned', async () => {
  expect(responseBody).toHaveProperty('available');
});

Then('the purchase order should not exist', async () => {
  const getResponse = await world.petStoreApiContext.get(`/store/order/${world.orderId}`);
  expect(getResponse.status()).toBe(404);
});

Then('the response status should be {int} if exists, or {int} if not for order id {int}', async (StatusCode200: number, StatusCode404: number, id: number) => {
  if (response.status() === 200) {
    const responsebody = await response.json();
    expect(responsebody.id).toBe(id);
  } else {
    expect(response.status()).toBe(404);
  }
})

