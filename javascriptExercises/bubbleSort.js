let array = [8, 6, 2, 9, 4, 8, 6, 2, 6, 2, 9, 6, 2, 9, 4, 6, 1, 9, 4, 6];

const notDone = array => {
  for (i = 0; i < array.length - 1; i++) {
    let first = array[i];
    let second = array[i + 1];
    if (first < second) {
      continue;
    } else if (first > second) {
      return true;
    }
  }
};

const sort = array => {
  for (i = 0; i < array.length; i++) {
    let first = array[i];
    let second = array[i + 1];
    if (first > second) {
      array[i] = second;
      array[i + 1] = first;
      console.log(array);
    }
  }
};

do {
  sort(array);
} while (notDone(array));
console.log(array);
