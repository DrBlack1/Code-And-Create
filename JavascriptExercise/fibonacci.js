const fibonacci = places => {
  let result = [0, 1];

  for (i = 1; i < places; i++) {
    let next = result[i - 1] + result[i];
    result.push(next);
  }
  console.log(result);
};

fibonacci(10);
