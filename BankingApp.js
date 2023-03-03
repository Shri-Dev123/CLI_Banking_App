const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const accounts = {};

function createAccount(name) {
  const accountNumber = `ACC${Object.keys(accounts).length + 1}`;
  accounts[accountNumber] = {
    name: name,
    balance: 0
  };
  console.log(`Account ${accountNumber} created for ${name}`);
}

function deposit(accountNumber, amount) {
  if (accounts[accountNumber]) {
    accounts[accountNumber].balance += amount;
    console.log(`${amount} deposited into ${accounts[accountNumber].name}'s account`);
  } else {
    console.log(`Account ${accountNumber} does not exist`);
  }
}

function withdraw(accountNumber, amount) {
  if (accounts[accountNumber]) {
    if (accounts[accountNumber].balance >= amount) {
      accounts[accountNumber].balance -= amount;
      console.log(`${amount} withdrawn from ${accounts[accountNumber].name}'s account`);
    } else {
      console.log(`Insufficient balance for ${accounts[accountNumber].name}'s account`);
    }
  } else {
    console.log(`Account ${accountNumber} does not exist`);
  }
}

function balance(accountNumber) {
  if (accounts[accountNumber]) {
    console.log(`${accounts[accountNumber].name} ${accounts[accountNumber].balance}`);
  } else {
    console.log(`Account ${accountNumber} does not exist`);
  }
}

rl.on('line', (input) => {
  const [command, ...args] = input.split(' ');

  switch (command) {
    case 'CREATE':
      createAccount(args[0]);
      break;
    case 'DEPOSIT':
      deposit(args[0], Number(args[1]));
      break;
    case 'WITHDRAW':
      withdraw(args[0], Number(args[1]));
      break;
    case 'BALANCE':
      balance(args[0]);
      break;
    default:
      console.log(`Invalid command: ${command}`);
  }
});
