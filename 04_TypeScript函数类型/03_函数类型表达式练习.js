// js实现案例:由函数外决定+ - * /运算
function calc(callback) {
    const num1 = 10
    const num2 = 20

    const res = callback(num1,num2)
    return res
}

function add(num1,num2){
    return num1 + num2
}
console.log("相加：",calc(add));

function sub(num1,num2){
    return num1 - num2
}
console.log("相减：",calc(sub));

function mul(num1,num2){
    return num1 * num2
}
console.log("相乘：",calc(mul));

function div(num1,num2){
    return num1 / num2
}
console.log("相除：",calc(div));