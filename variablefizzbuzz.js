for (let num = 1 ; num <= 100 ; num++) {
    
    if (num % 5 === 0) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        }
        else {
        console.log ("Buzz");
        }
    }
    else if (num % 3 === 0) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        }
        else {
        console.log ("Fizz");
        }
    }

    else {
        console.log(num);
    }   
}
