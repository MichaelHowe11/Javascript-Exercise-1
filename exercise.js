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
let output = 0;
CalcAsk = CalcAsk.split(' ');
let CalcAsk2 = CalcAsk.map(Number);

console.log(CalcAsk2);

for (let i = 0; i < CalcAsk2.length; i++) {
    if (calcset === 0) {
        output = CalcAsk2[i]+CalcAsk2[i-i];
    } else if (calcset === 1) {
    
    } else if (calcset === 2) {
    
    } else if (calcset === 3) {
    
    }
}

console.log(output);

