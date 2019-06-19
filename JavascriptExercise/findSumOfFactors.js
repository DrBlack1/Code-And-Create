//1 - FIND THE SUM OF ALL FACTORED NUMBERS:

const checkNumbersAreFactors = (factor1, factor2, top) => {
  let isFactor = [];
  for (i = 1; i < top; i++) {
    if (i % factor1 == 0 || i % factor2 == 0) {
      isFactor.push(i);
    } else {
      continue;
    }
  }
  sumAllFactors(isFactor);
};

const sumAllFactors = Factors => {
  let result = 0;
  for (i = 0; i < Factors.length; i++) {
    result += Factors[i];
  }
  console.log(result);
};

checkNumbersAreFactors(3, 5, 1000);
// 233168
