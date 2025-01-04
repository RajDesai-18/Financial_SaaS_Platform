# Financial Management App

## Overview
This Financial Management App is designed to help users efficiently manage their personal finances. It offers a comprehensive suite of tools to monitor and manage financial transactions, bank account details, and spending patterns. Using a combination of modern web technologies, the app provides a seamless and secure user experience.

## Features
- **Authentication**: Offers SSR authentication ensuring secure access with stringent validations and authorization checks.
- **Connect Banks**: Seamlessly links multiple bank accounts using Plaid, providing a centralized view of your financial landscape.
- **Home Page**: Displays a consolidated overview of your financial status including total balances from all linked banks, recent transactions, and expenditure across various categories.
- **My Banks**: Enables a detailed view of all connected bank accounts showing balances and specific account information.
- **Transaction History**: Offers comprehensive transaction records with capabilities for pagination and filtering, allowing users to easily track and manage their financial activities.
- **Real-time Updates**: Automatically updates information across the application in real-time as new bank accounts are connected or existing ones are updated.
- **Funds Transfer**: Facilitates easy transfer of funds between accounts using Dwolla, with essential fields for recipient bank ID.
- **Responsiveness**: Designed to adapt flawlessly across different devices including desktops, tablets, and mobiles, ensuring a consistent and engaging user experience.

## Technology Stack
- **Next.js**
- **TypeScript**
- **Appwrite**
- **Plaid**
- **Dwolla**
- **React Hook Form**
- **Zod**
- **TailwindCSS**
- **Chart.js**

## Installation

### Prerequisites
Before installing, ensure you have the following:
- Node.js installed (preferably the latest stable version).
- A package manager like npm or yarn.

### Cloning the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/RajDesai-18/Financial_SaaS_Platform.git
```
Navigate into the project directory:
```bash
cd Financial_SaaS_Platform
```

### Installing Dependencies
Install all the required dependencies by running:
```bash
npm install
```
or if you use yarn:
```bash
yarn install
```

### Environment Setup
Copy the example environment file and make the necessary changes according to your local environment:
```bash
cp .env.example .env
```
Fill in the `.env` file with your database credentials, API keys for Plaid, Dwolla, and any other services the application uses.

### Starting the Development Server
Once all dependencies are installed and the environment variables are set, start the development server by running:
```bash
npm run dev
```
or if you use yarn:
```bash
yarn dev
```

### Accessing the Application
Open your web browser and visit `http://localhost:3000` to start using the Financial SaaS Platform.

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.
