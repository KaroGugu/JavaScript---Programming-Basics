function biggestNumber(input){
    let command = input[0];
    let index = 1;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command != 'Stop'){
        let currentNumber = Number(command);
        if (currentNumber > maxNumber){
            maxNumber = currentNumber
        }
        command = input[index];
        index++
    }
    console.log(maxNumber)
}

// biggestNumber((["-10",
// "20",
// "-30",
// "Stop"])
// )