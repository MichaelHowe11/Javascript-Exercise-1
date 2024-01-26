let calctype = 0;
let calcText = "";
let split = "";

function awesome() {
if (event.srcElement.id === "addButton") {
    calctype = 0;
    calcText = "add";
    split1 = '+'
} else if (event.srcElement.id === "subButton") {
    calctype = 1;
    calcText = "subtract";
    split1 = '-'
} else if (event.srcElement.id === "multiButton") {
    calctype = 2;
    calcText = "multiply";
    split1 = '*'
} else if (event.srcElement.id === "divButton") {
    calctype = 3;
    calcText = "divide";
    split1 = '/'
} else if (event.srcElement.id === "modButton") {
    calctype = 4;
    calcText = "modulo";
    split1 = '%'
} else {
    calctype = 5;
    calcText = "exponent";
    split1 = '^'
}
CalcAsk = prompt("Input two numbers you want to " + calcText +  " and seperate them by the " + calcText + " sign.");
CalcAsk = CalcAsk.split(split1);
CalcAsk = CalcAsk.map(Number);
for (let i = 0; i < CalcAsk.length; i++) {
    if (calctype === 0) {
        output = CalcAsk[i-i]+CalcAsk[i];
    } else if (calctype === 1) {
        output = CalcAsk[i-i]-CalcAsk[i];
    } else if (calctype === 2) {
        output = CalcAsk[i-i]*CalcAsk[i];
    } else if (calctype === 3) {
        output = CalcAsk[i-i]/CalcAsk[i];
    } else if (calctype === 4) {
        output = CalcAsk[i-i]%CalcAsk[i];
    } else {
        output = CalcAsk[i-i]**CalcAsk[i];
    }
}
if (isNaN(parseFloat(CalcAsk)) || (calctype === 3 && CalcAsk[1] === 0)) {
    document.getElementById("outputhtml").innerHTML = "You inputted an invalid equation";
    } else {
    document.getElementById("outputhtml").innerHTML = output;
    }
}