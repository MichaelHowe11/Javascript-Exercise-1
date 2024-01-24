CalcAsk = prompt("Addition, Subtraction, Multiplication, or Division?");
CalcAsk = CalcAsk.toLowerCase();
let calcset = 0;


if (CalcAsk === "addition") {
    calcset = 0;
} else if (CalcAsk === "subtraction") {
    calcset = 1;
} else if (CalcAsk === "multiplication") {
    calcset = 2;
} else if (CalcAsk === "division") {
    calcset = 3;
}

CalcAsk = prompt("What Numbers do you want to add?");

CalcAsk = CalcAsk.split(' ');

for (let index = 0; index < CalcAsk.length; index++) {
    if (calcset === 0) {
        
    } else if (calcset === 1) {
    
    } else if (calcset === 2) {
    
    } else if (calcset === 3) {
    
    }
}

