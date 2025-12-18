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

Given('the OpenWeather API is available', async () => {
  expect(world.apiKey).not.toBe('');
});

When('User request the weather for city {string} in JSON format',async (city: string) => {
    response = await world.weatherApiContext.get(
      `weather?q=${city}&appid=${world.apiKey}`
    );
    responseBody = await response.json();
  }
);

When('User request the weather using latitude {string} and longitude {string} in JSON format',async (lat: string, lon: string) => {
    response = await world.weatherApiContext.get(
      `weather?lat=${lat}&lon=${lon}&appid=${world.apiKey}`
    );
    responseBody = await response.json();
  }
);

When('User request the weather for city {string} in XML format',async (city: string) => {
    response = await world.weatherApiContext.get(
      `weather?q=${city}&appid=${world.apiKey}&mode=xml`
    );
  }
);

Then('the weather information should be returned in JSON', async () => {
  expect(responseBody).toHaveProperty('weather');
  expect(responseBody).toHaveProperty('main');
  expect(responseBody.name).toBeDefined();
});

Then('the weather information should be returned in XML', async () => {
  const bodyText = await response.text();
  expect(bodyText).toContain('<current>');
  expect(bodyText).toContain('<temperature');
});