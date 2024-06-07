#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        type: "number",
    }
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromamount; // usd base currency 
let convertedAmount = baseAmount * toamount;
let roundNumber = convertedAmount.toFixed(2);
console.log(roundNumber);
