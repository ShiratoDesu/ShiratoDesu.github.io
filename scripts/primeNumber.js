// function to loop and check every number less than input is prime?
function primeToArray(n, array) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        array.push(i);
    }
}

// function to loop and check if input number is prime?
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0 ) return false;
    }
    return true;
}

//  function of main program
function printPrimeNumber() {
    let inputNumber;
    let printedPrime = "";
    const primeNumber = [];

    // while loop, break if input is positive and integer number
    while (true) {
        inputNumber = Number(prompt("Enter a positive integer"));
        if (inputNumber > 0 && Number.isInteger(inputNumber)) break;
    }
    
    primeToArray(inputNumber, primeNumber);
    
    // loop to append every prime number to string
    for (let i = 0; i < primeNumber.length; i++) {
        printedPrime += String(primeNumber[i]);
        if (i != (primeNumber.length - 1)) printedPrime += ",";
    }
    
    alert("For n = " + inputNumber + " prime function are " + printedPrime);
}

printPrimeNumber();