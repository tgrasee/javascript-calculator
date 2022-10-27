function add(...args) {
  try {
    args.forEach(number);

    function number(item) {
      if (isNaN(item) === true) {
        throw 'not a number';
      }
    }

    const initialValue = 0;
    const sum = args.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log(sum);
  }

  catch(err) {
    console.log(err);
    // alert(err);
  }

}
// add(4, 2);

function subtract(...args) {
  try {
    args.forEach(number);

    function number(item) {
      if (isNaN(item) === true) {
        throw 'not a number';
      }
    }
    const difference = args.reduce(myFunc);

    function myFunc(total, num) {
      return total - num;
    }
    console.log(difference); 
  }

  catch(err) {
    console.log(err);
    // alert(err);
  }
     
}
// subtract(2, 2, 2);

function multiply(...args) {
  try {
    args.forEach(number);

    function number(item) {
      if (isNaN(item) === true) {
        throw 'not a number';
      }
    }
    const product = args.reduce(myFunc);

    function myFunc(total, num) {
      return total * num;
    }
    console.log(product);
  }
  catch(err) {
    console.log(err);
  }
}
// multiply(3, 2, 2);

function divide(...args) {
  try {
    args.forEach(number);

    function number(item) {
      if (isNaN(item) === true) {
        throw 'not a number';
      }
    }
    const quotient = args.reduce(myFunc);

    function myFunc(dividend, divisor) {
      return dividend / divisor;
    }
    console.log(quotient);
  }
  catch(err) {
    console.log(err);
  }
}
// divide(2, 3);