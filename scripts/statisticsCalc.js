function readinput() {
    let negativeNum = false;
    let tempArray = [];
    do {
        input = Number(prompt("Enter an integer (a negative integer to quit)"));
        if (input < 0 && Number.isInteger(input)) {
            negativeNum = true;
        } else if (input > 0 && Number.isInteger(input)) {
            tempArray.push(input);
        } else {
            continue;
        }
    } while (negativeNum == false);
    return tempArray;
}

function displayStats(array) {
    let average = findAverage(array);
    let minMax = findMinMax(array);
    alert("For the list " + ((array.length != 0) ? array : "that is empty") +
        ", the average is " + average + ", the minimum is " + (minMax.min ?? 0) +
        ", and the maximum is " + (minMax.max ?? 0));
}

function findAverage(array) {
    let sum = 0;
    for(i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return Number(sum / ((array.length != 0) ? array.length : 1)).toFixed(2);
}

function findMinMax(array) {
    let minMax = {
        min : array[0],
        max : array[0]
    };
    for(i = 0; i < array.length; i++) {
        if(array[i] < minMax.min) minMax.min = array[i];
        if(array[i] > minMax.max) minMax.max = array[i];
    }
    return minMax;
}

let list = readinput();
displayStats(list);