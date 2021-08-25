# Moon Automation

## Introduction

This repository is used to show some of the best practices commonly used in Cypress.

## Installation

Clone the repository in your workspace
```bash
git clone git@github.com:wizaplace/Moon-Automation.git
```

## Install Cypress

### 1. Create a package.json first in your node Js Folder
Assuming that you have already installed a node, we must first create a package.json file.
Type this command `npm init` either in your IDE Terminal or commande prompt.

As soon as you type the command and press "Enter" key to execute the command, it will ask for a few details in order to complete your creation task

### 2. Cypress installation

Till now, we have downloaded node and initialized npm, which sets up the initial base project. Now our next step is to install Cypress so that we can start writing our tests.

`npm install cypress --save-dev`

It will install the latest version of Cypress for you and --save-dev saves the dependencies in package.json so that if you share this project with a colleague, he/she need not repeat the same activity.

Next step is just to run the following command, and the Cypress GUI will start:

`npx cypress open`

### 3. Cypress Dashboard Service
link -> https://dashboard.cypress.io/projects/2dg86s/runs/2/overview
![moonDash](https://user-images.githubusercontent.com/50830106/130757107-fa2bb157-ad32-4b23-935d-ea49183a4024.png)
