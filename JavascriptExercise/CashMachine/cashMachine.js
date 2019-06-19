let verified = false;
let accNumber = prompt("Enter your Account Number", "");
let pinNum = prompt("Enter your pin.", "");
let amount = prompt("How much would you like to withdraw?")

let users = [
{
    accClosed: false,
    accNum: 11111111,
    authenticatedPin: 1111,
    balance: 3000
},
{
    accClosed: true,
    accNum: 22222222,
    authenticatedPin: 2222,
    balance: 0
},
{
    accClosed: false,
    accNum: 33333333,
    authenticatedPin: 3333,
    balance: 11000
},
{
    accClosed: false,
    accNum: 44444444,
    authenticatedPin: 4444,
    balance: 900
},
{
    accClosed: false,
    accNum: 55555555,
    authenticatedPin: 5555,
    balance: 2500
}
]

const userCheck = (accNumber) => {
    if (accNumber === users.accNum) {
        console.log("Account Number Recognised");
        enterPin(pinNum);
    } else {
        console.log("Sorry there was an error");
        return null;
    }
}

const enterPin = () => {
    if (pinNum === users.authenticatedPin) {
        console.log("Pin is correct");
        withdrawal(amount, user.balance)
    } else {
        console.log("Pin is incorrect")
    }
}

const withdrawal = (amount, accBalance) => {
    if (amount > accBalance) {
        console.log("Insufficient funds")
    } else if (amount > accBalance) {
        console.log(amount - accBalance);
        console.log("Transaction successful")
    }
}
