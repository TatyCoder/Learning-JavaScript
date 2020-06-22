const defaultResult = 0
let currentResult = defaultResult;
let logEntries = [];
let logEntry = {};

//function add(num1, num2) {
//    const result = num1 + num2;
//    return result;
    //alert(`The result is ${result}`);
//}

//currentResult = add(22,77);

//let calculationDescription = `(${defaultResult} + 10) * 3/2 - 1`;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription); //from vendors.js
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
)   { 
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
/* for Subtract option only:
    } else { 
      currentResult -= enteredNumber; 
      mathOperator = '-';
    }*/ 
// For all the operations:
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-'; 
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';  
    } // you don't put a ; at the end of this }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult); 
}

function add() {
    calculateResult('ADD');

    /*const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    //currentResult = currentResult + enteredNumber;
    currentResult += enteredNumber; // this is a shortcut for previous line
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);

    /*const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    }
    logEntries.push(logEntry);
    console.log(logEntry.result);
    console.log(logEntries);*/
}

function subtract() {
    calculateResult('SUBTRACT');

    /*const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    //currentResult = currentResult - enteredNumber;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);*/
}

function multiply() {
    calculateResult('MULTIPLY');

    /*const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    //currentResult = currentResult * enteredNumber;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);*/
}

function divide() {
    calculateResult('DIVIDE');

    /*const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    //currentResult = currentResult / enteredNumber;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);*/
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);