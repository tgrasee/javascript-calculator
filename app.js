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
subtract('a', 2);

function multiply() {

}

function divide() {

}