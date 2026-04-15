# APITestingPlaywright
This repository contains two .feature files that cover two coding exercises in API testing using Playwright and Cucumber:

## Pet Store Exercise:
Consider the API https://petstore.swagger.io/ as the SUT, which is a service designed to manage a pet store. Implement the test cases associated with the following functionalities:

* View a purchase order
* Search for the created purchase order
* Check sales inventory
* Delete a purchase order

## Weather Map Exercise:
Consider the API https://openweathermap.org/current as the SUT, which provides real-time weather information. Implement the test cases associated with the following functionalities:

* Retrieve weather information by city name
* Retrieve weather information by latitude and longitude
* Retrieve weather information in JSON format
* Retrieve weather information in XML format

## Prerequisites
To run the repository, you must meet the following prerequisites:
* Node.js
* Visual Studio Code and the following extensions: Cucumber and Playwright
* Before setting up the project, you must clone this repository into a new directory following the github documentation showed on https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository. 

## Project Setup
Open a new terminal in Visual Studio Code. Then set up the project using the following commands:

* Initialize a new Node.js project using `npm init -f`.
* Install the latest version of Playwright using `npm install playwright@latest`.
* Install Cucumber using `npm install -D @cucumber/cucumber`.
* Install ts-node using `npm install -D ts-node`.

## Running the Repository
To run the repository, use the `npm run cucumber` command, which executes the .feature files and generates reports within the project’s `reports` folder. These reports are generated in .json and .html formats, allowing you to verify the execution of the developed test cases.

<img width="700" height="432" alt="image" src="https://github.com/user-attachments/assets/16099e0a-211c-48b5-956c-724282781fce" />

## Author 
Yoniver Hoyos Muñoz

Industrial Automation Engineer
