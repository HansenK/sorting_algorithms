const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getUpdatedArrayAfterSwapValues = (
  array,
  firstIndex, // Index of one of the elements you want to swap
  secondIndex // Index of the other element you want to swap with
) => {
  let updatedArray = Array.from(array);

  const firstIndexElement = array[firstIndex];
  const secondIndexelement = array[secondIndex];

  updatedArray[firstIndex] = secondIndexelement;
  updatedArray[secondIndex] = firstIndexElement;

  return updatedArray;
};

const bubbleSort = (array = []) => {
  let updatedArray = Array.from(array);
  const arrayLength = array.length;
  const arrayLastIndex = arrayLength - 1;

  for (let i = 0; i < arrayLastIndex; i++) {
    for (let j = arrayLastIndex; j >= i + 1; j--) {
      if (updatedArray[j] < updatedArray[j - 1]) {
        updatedArray = getUpdatedArrayAfterSwapValues(updatedArray, j, j - 1);
      }
    }
  }

  return updatedArray;
};

const insertionSort = (array) => {
  let updatedArray = Array.from(array);
  const arrayLength = array.length;
  const arrayLastIndex = arrayLength - 1;

  for (j = 1; j < arrayLastIndex; j++) {
    let i = j - 1;
    const key = updatedArray[j];

    while (i >= 0 && updatedArray[i] > key) {
      updatedArray[i + 1] = updatedArray[i];
      i -= 1;
    }
    updatedArray[i + 1] = key;
  }

  return updatedArray;
};

const selectionSort = (array) => {
  let updatedArray = Array.from(array);
  const arrayLength = array.length;
  const arrayLastIndex = arrayLength - 1;
  const arrayPenultimateIndex = arrayLength - 2;

  for (let i = 0; i <= arrayPenultimateIndex; i++) {
    let min = i;

    for (let j = i + 1; j <= arrayLastIndex; j++) {
      if (updatedArray[j] < updatedArray[min]) {
        min = j;
      }
    }

    if (updatedArray[i] !== updatedArray[min]) {
      updatedArray = getUpdatedArrayAfterSwapValues(updatedArray, i, min);
    }
  }

  return updatedArray;
};

const getNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

(() => {
  readline.question(
    "Enter the length of the array you want to sort: ",
    (arrayLength) => {
      const parsedArrayLength = parseInt(arrayLength);
      if (!Number.isInteger(parsedArrayLength)) {
        console.log("Sorry that's not a valid integer number.");
        readline.close();
      }

      const filledArray = Array(parsedArrayLength)
        .fill(0)
        .map(() => {
          const randomNumber = getNumberBetween(-1000, 1000);
          return randomNumber;
        });

      console.clear();
      console.log("Initial Array: ", filledArray);
      console.log("\nApplying Algorithms...");

      let bubbleSortTimeInMilliseconds = new Date().getTime();
      bubbleSort(filledArray);
      bubbleSortTimeInMilliseconds =
        new Date().getTime() - bubbleSortTimeInMilliseconds;

      let insertionSortTimeInMilliseconds = new Date().getTime();
      insertionSort(filledArray);
      insertionSortTimeInMilliseconds =
        new Date().getTime() - insertionSortTimeInMilliseconds;

      let selectionSortTimeInMilliseconds = new Date().getTime();
      const selectionSortedArray = selectionSort(filledArray);
      selectionSortTimeInMilliseconds =
        new Date().getTime() - selectionSortTimeInMilliseconds;

      console.log("\nTotal time to sort for each algorithm:");
      console.log(`Bubble Sort: ${bubbleSortTimeInMilliseconds}ms`);
      console.log(`Insertion Sort: ${insertionSortTimeInMilliseconds}ms`);
      console.log(`Selection Sort: ${selectionSortTimeInMilliseconds}ms`);

      console.log("\nSorted Array: ", selectionSortedArray);
      readline.close();
    }
  );
})();
