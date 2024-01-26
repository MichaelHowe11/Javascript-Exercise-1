// Functions make me crazy

function add() {
    CalcAsk = prompt("Input two numbers you want to add and seperate them by a space.");
    CalcAsk = CalcAsk.split(' ');
    console.log(CalcAsk);
    CalcAsk = CalcAsk.map(Number);

    for (let i = 0; i < CalcAsk.length; i++) {
            output = CalcAsk[i-i]+CalcAsk[i];
    }
    if (isNaN(parseFloat(CalcAsk))) {
        document.getElementById("outputhtml").innerHTML = "You inputted an invalid equation";
        } else {
        document.getElementById("outputhtml").innerHTML = output;
        }
        console.log(output);
}
function sub() {
    CalcAsk = prompt("Input two numbers you want to subtract and seperate them by a space.");
    CalcAsk = CalcAsk.split(' ');
    CalcAsk = CalcAsk.map(Number);
    for (let i = 0; i < CalcAsk.length; i++) {
            output = CalcAsk[i-i]-CalcAsk[i];
    }
    if (isNaN(parseFloat(CalcAsk))) {
    document.getElementById("outputhtml").innerHTML = "You inputted an invalid equation";
    } else {
    document.getElementById("outputhtml").innerHTML = output;
    }
    console.log(output);
}
function mult() {
    CalcAsk = prompt("Input two numbers you want to multiply and seperate them by a space.");
    CalcAsk = CalcAsk.split(' ');
    CalcAsk = CalcAsk.map(Number);
    for (let i = 0; i < CalcAsk.length; i++) {
            output = CalcAsk[i-i]*CalcAsk[i];
    }
    if (isNaN(parseFloat(CalcAsk))) {
        document.getElementById("outputhtml").innerHTML = "You inputted an invalid equation";
        } else {
        document.getElementById("outputhtml").innerHTML = output;
        }
        console.log(output);
}
function division() {
    CalcAsk = prompt("Input two numbers you want to divide and seperate them by a space.");
    CalcAsk = CalcAsk.split(' ');
    CalcAsk = CalcAsk.map(Number);
    for (let i = 0; i < CalcAsk.length; i++) {
            output = CalcAsk[i-i]/CalcAsk[i];
    }
    if (isNaN(parseFloat(CalcAsk))) {
        document.getElementById("outputhtml").innerHTML = "You inputted an invalid equation";
        } else {
        document.getElementById("outputhtml").innerHTML = output;
        }
        console.log(output);
}
function mod() {
    CalcAsk = prompt("Input two numbers you want to modulo and seperate them by a space.");
    CalcAsk = CalcAsk.split(' ');
    CalcAsk = CalcAsk.map(Number);
    for (let i = 0; i < CalcAsk.length; i++) {
            output = CalcAsk[i-i]%CalcAsk[i];
    }
    if (isNaN(parseFloat(CalcAsk))) {
        document.getElementById("outputhtml").innerHTML = "You inputted an invalid equation";
        } else {
        document.getElementById("outputhtml").innerHTML = output;
        }
        console.log(output);
}
function exponents() {
    CalcAsk = prompt("Input two numbers you want to exponent and seperate them by a space.");
    CalcAsk = CalcAsk.split(' ');
    CalcAsk = CalcAsk.map(Number);
    for (let i = 0; i < CalcAsk.length; i++) {
            output = CalcAsk[i-i]**CalcAsk[i];
    }
    if (isNaN(parseFloat(CalcAsk))) {
        document.getElementById("outputhtml").innerHTML = "You inputted an invalid equation";
        } else {
        document.getElementById("outputhtml").innerHTML = output;
        }
        console.log(output);
}