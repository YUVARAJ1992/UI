function addition(a, b) {
    // var a = 200;
    // var b = 100;
    var result = a + b;
    console.log(result)
};

function calculation() {
    try{
    var result;
    var num1 = prompt("Enter first value");
    var num2 = prompt("Enter second value");
    var mode = prompt("Enter the calculation symbol");

    switch (mode) {
        case "+":
            result = parseIn(num1) + parseInt(num2);
            break;
        case "-":
            result = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            result = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            result = parseInt(num1) / parseInt(num2);
            break;
        default:
            result = "The given calcualtion symbol is not correct";

    }
    console.log(result);
}
catch(err){
    console.log(err);
    alert("There is some issue, Please try again later");
}
}
// if(mode == "+"){
//     result = parseInt(num1) + parseInt(num2);
// }else if(mode == "-"){
//    result = parseInt(num1) - parseInt(num2);
// }else if(mode == "*"){
//    result = parseInt(num1) * parseInt(num2);
// }else if(mode == "/"){
//     result = parseInt(num1) / parseInt(num2);
// }else{
//     result = "The given symbol is not valid one";
//  }
// console.log(result);
// }
