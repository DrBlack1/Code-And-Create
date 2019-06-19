class Cars {
    constructor (regNum) {
      this.regNum = regNum; 
      this.hours = 0; 
      this.GBPCharge = 0.00; 
    }
    get registrationNr() {
      return this.regNum; 
    }
    get numOfHrParked() {
      return this.hours; 
    }
    get totalGBPCharge() {
      return this.GBPCharge; 
    }
    increaseHrPay() {
      this.hours++; 
      this.GBPCharge += 1.50; 
    }
  } 
  
  class Staff extends Cars {
    constructor(regNum, staffNum) {
      super(regNum); 
      this.staffNum = staffNum; 
      this.credit = 100.00; 
    }
    get staffNumber() {
      return this.staffNum; 
    }
    get creditLeft() {
      return this.credit; 
    }
    reduceCredit () {
      this.credit -= this.GBPCharge; 
    }
  }
  
  const payment = (regNum, hours) => {
    const car1 = new Cars(regNum);
    
    for (let i = 0; i < hours; i++)
    {
      car1.increaseHrPay(); 
    }
    console.log(`Notice: you parked for ${car1.numOfHrParked} hours and your charge is £${car1.totalGBPCharge}`)
  }
  payment("Herbie", 5);
  
  const staffPayment = (regNum, staffNum, hours) => {
    const car2 = new Staff(regNum, staffNum); 
    
    for (let i = 0; i < hours; i++)
    {
      car2.increaseHrPay(); 
    }
    // solution 1: 
    car2.reduceCredit(); 
  
    // solution 2: 
    // let carBalance = car2.creditLeft - car2.totalGBPCharge; // ${carBalance}
  
    console.log(`Notice: you parked for ${car2.numOfHrParked} hours and your charge is £${car2.totalGBPCharge}, your remaining balance is ${car2.creditLeft}`)
  }
  staffPayment("The Love Bug", "12345", 15); 