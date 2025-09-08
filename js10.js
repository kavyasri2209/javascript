var app="simplecalculator";

console.log(calculator('Add'));

console.log(calculator('Sub'));

function calculator(operation) {
    let num1 = 3;
    let num2 = 4;
    console.log("----+"+app+" +----");
    switch (operation) {
        case 'Add':
            return num1 + num2;     
            break;  
        case 'Sub':
            return num1 - num2;
            break;
        case 'Mul':
            return num1*num2;
            break;
        case 'Div':
            return num1/num2;
            break;
        default:    
            return "Invalid option selected";
        
    }
}
