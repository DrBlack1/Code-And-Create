let userPin = 9876;
let userPinInput;
let userBalance = 0;
let validatedPin = false;

const cashMachine = () => {
  let attempt = 1;
  while (attempt < 4 && validatedPin == false) {
    userPinInput = prompt(
      `Hello! Please enter your PIN number: \n(Attempt ${attempt})`
    );
    if (userPin == userPinInput) {
      alert("PIN number correct!");
      validatedPin = true;
      mainPrompt();
    } else if (attempt < 3) {
      attempt++;
      alert("That PIN is incorrect");
    } else {
      alert(`You have entered the wrong pin ${attempt} times. Card seized`);
      attempt += 1;
    }
  }
};

const mainPrompt = () => {
  userInput = prompt(
    "Please choose from the menu: \n 1 - Display Current Balance \n 2 - Withdraw Funds \n 3 - Deposit Funds \n 4 - Change Your Pin Number \n 5 - No other service needed"
  );
  mainMenuChoice(userInput);
};

const displayBalance = () => {
  alert(
    `Your current balance is £${userBalance}. \n \n Click okay to go back to main menu.`
  );
  mainPrompt();
};

const withdrawFunds = () => {
  let withdraw = prompt(
    `You currently have £${userBalance} available. Please enter an amount to withdraw: `
  );
  withdraw = parseInt(withdraw, 10);
  userBalance -= withdraw;
  alert(
    `You have withdrawn £${withdraw}, your new balance is £${userBalance}.`
  );
  mainPrompt();
};

const depositFunds = () => {
  let addFunds = prompt(`Please enter an amount to deposit: `);
  addFunds = parseInt(addFunds, 10);
  userBalance += addFunds;
  alert(
    `You have deposited £${addFunds}, your new balance is £${userBalance}.`
  );
  mainPrompt();
};

const changePin = () => {
  let newPin = prompt(`Please enter the new pin you would like: `);
  let verifyNewPin = prompt(`Please re-enter your new pin: `);
  if (newPin == verifyNewPin) {
    userPin = newPin;
    alert(`Thank you, your pin has been changed`);
    mainPrompt();
  } else {
    alert(
      "Your new pin did not match on the second attempt. Please try again. "
    );
    mainPrompt();
  }
};

const noOtherService = () => {
  alert("Thank you! \n\nReturning card now");
};

const mainMenuChoice = userInput => {
  switch (userInput) {
    case "1":
      displayBalance();
      break;
    case "2":
      withdrawFunds();
      break;
    case "3":
      depositFunds();
      break;
    case "4":
      changePin();
      break;
    case "5":
      noOtherService();
      break;
    default:
      alert(
        `'${userInput}' is not a valid choice. Please enter a number between 1 and 5.`
      );
      mainPrompt();
      break;
  }
};

cashMachine();
