
# Banking Application CLI

A simple command-line interface banking application built using JavaScript. This application allows users to create an account, deposit and withdraw money from their accounts, and check their account balance.


## Authors

- [@shrikant Kallshetty](https://github.com/Shri-Dev123)


## Documentation

[Documentation](https://linktodocumentation)


## Features

- Create account
- Deposit amount
- Withdraw amount
- Check account balance


## Use the App

To run the App in terminal

```bash
  node BankingApp.js
```


## Tech Stack

**Server:** Node.js

## Appendix

Change directory:

cd banking-app-cli
Install dependencies:
npm install
Start the application:


npm start
Commands
Create Account
Create a new account with zero balance.


# CREATE <Account>

Example:

CREATE John
Deposit Amount
Add the amount to the existing balance of the account.


# DEPOSIT <account-number> <amount>

Example:
DEPOSIT ACC001 10000
Withdraw Amount
Reduce the amount from the existing balance of the account.


# WITHDRAW <account-number> <amount>
Example:
WITHDRAW ACC001 5000
Show Balance
Show the current balance of the account along with the account name.


# BALANCE <account-number>
Example:
BALANCE ACC001

# Sample Input/Output

Input:

CREATE ACC001 John
DEPOSIT ACC001 10000
WITHDRAW ACC001 5000
CREATE ACC002 Jane
DEPOSIT ACC002 15000
WITHDRAW ACC002 1000
BALANCE ACC002
BALANCE ACC001

Output:

Jane 14000
John 5000

