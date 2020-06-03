function add(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {alert("Illegal number detected");}
    let sum = num1 + num2;
    return sum;
}

/* 
@param {*} num1, num2 - The nukbers to manipulate mathematically
@return {boolean} the product/sum


 */
function multiply(num1, num2){
    let product = 0;
    if (isNaN(num1) || isNaN(num2)) {alert("Illegal number detected");}
    //not the most efficient way of doing this, fails if one param is a floating point number
    for(let i = 0; i < num2; i++){
        product += add(num1, 0); 
    }

    return product;
}

function power(num1, num2){
    if (isNaN(num1) || isNaN(num2)) {alert("Illegal number detected");}
    let cumulativeProduct = 1;
    for(let i = 0; i < num2; i++){
        cumulativeProduct *= num1;
    }

    return cumulativeProduct;
}

function factorial(num){
    num = Math.abs(num);
    if(num === 0){return 1;}  //hardcoded result of 0! = 1
    for(let i = num-1; i > 0; --i){
        num *= i;
    }

    return num;
}

function fibonacci(n){
    let y;
    let x = 1;
    var nthTerm = 0;
    for(let i = 2; i <= n; i++){
        y = x;
        x = nthTerm;
        nthTerm += y;
    }

    return nthTerm;
}
 
        

