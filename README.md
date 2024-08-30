# crm-typescript-template
A Typescript Project template for Dynamics 365 CRM Client-side scripts
Use this project as a template to quickly start writing Dynamics 365 CRM/PowerApps Model-Driven Apps Client-Side Scripts in Typescript.

## Pre-requisites
- Install NPM (Node Package Manager)
- Install TypeScript

## Setup

Run `npm install` to install all dependencies

## Information
This package uses prettier and eslint for code formatting and checking. Please modify the ` .eslintrc.json` file according to the best practice you want to follow for your CRM implementation.

## Folder Structure
- `/src/**.ts` is where the TypeScript files will be created
- `/dist/**.js` is the output directory for CRM JavaScript files

## Package Scripts

The `package.json` file contains the following scripts:

#### `lint`
- **Command:** `eslint 'src/**/*.ts'`
- **Description:** Runs ESLint on all TypeScript files in the `src` directory and its subdirectories. This is used to check for code quality and style issues.

#### `prettier:check`
- **Command:** `prettier --check 'src/**/*.{ts,tsx,js,jsx,json,css,scss,md}'`
- **Description:** Checks if the files with specified extensions (TypeScript, JavaScript, JSON, CSS, SCSS, Markdown) in the `src` directory are formatted according to Prettier rules. This does not modify files, it only verifies formatting.

#### `prettier:write`
- **Command:** `prettier --write 'src/**/*.{ts,tsx,js,jsx,json,css,scss,md}'`
- **Description:** Formats the files with the specified extensions in the `src` directory using Prettier. This command will modify files to ensure they match the Prettier configuration.

#### `format`
- **Command:** `npm run prettier:write && npm run lint`
- **Description:** A combination of `prettier:write` and `lint`. This script first formats the files using Prettier, then runs ESLint to ensure code quality and style.

#### `build`
- **Command:** `npm run format && tsc`
- **Description:** Formats and lints the code using `format`, then compiles the TypeScript files using the TypeScript compiler (`tsc`).

 
