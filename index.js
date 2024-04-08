#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    INR: 75,
    GBP: 0.8,
    EUR: 0.91,
    PKR: 280,
    BRL: 5.07,
    BDT: 109.50,
    AFN: 71.23,
    SAR: 3.75,
    IRR: 42.00,
    AUD: 1.35,
    AED: 3.67,
    CNY: 6.77,
    MYR: 4.78,
    TRY: 31.92,
    NZD: 1.47,
    LKR: 299.20,
    JPY: 151.67,
    KPW: 900,
    DZD: 131.25,
    ALL: 94.22,
    AZN: 1.70,
    BHD: 0.37,
    CAD: 1.35,
    BTN: 75.00,
    ETH: 0.00029,
    BTC: 0.000014,
    KRW: 1350.67,
    LRD: 194.00,
    ARS: 864.00,
    AMD: 388.45,
    BYN: 2.53,
    RUB: 92.42,
    JOD: 0.70,
    HRK: 7.04,
    KWD: 0.30,
    FJD: 2.00,
    CUP: 25.00,
    DOP: 58.98,
    LYD: 4.37,
    MRO: 356.84,
    ECS: 51.56,
    STN: 22.56,
    OMR: 0.38,
    MAD: 0.0036,
    NAD: 18.067
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "INR", "GBP", "EUR", "PKR", "BRL", "BDT", "AFN", "SAR", "IRR", "AUD", "AED", "CNY", "MYR", "TRY", "NZD", "LKR", "KPW", "DZD", "ALL", "AZN", "BHD", "CAD", "BTN", "ETH", "BTC", "KRW", "LRD", "ARS", "AMD", "BYN", "RUB", "JOD", "HRK", "KWD", "FJD", "CUP", "DOP", "LYD", "MRO", "ECS", "STN", "OMR", "MAD", "NAD"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "INR", "GBP", "EUR", "PKR", "BRL", "BDT", "AFN", "SAR", "IRR", "AUD", "AED", "CNY", "MYR", "TRY", "NZD", "LKR", "KPW", "DZD", "ALL", "AZN", "BHD", "CAD", "BTN", "ETH", "BTC", "KRW", "LRD", "ARS", "AMD", "BYN", "RUB", "JOD", "HRK", "KWD", "FJD", "CUP", "DOP", "LYD", "MRO", "ECS", "STN", "OMR", "MAD", "NAD"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from]; // Exchange Rate
let toAmount = currency[user_answer.to]; // Exchange Rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.warn(convertedAmount.toFixed());
