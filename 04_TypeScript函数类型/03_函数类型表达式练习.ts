type callBackType = (num1: number, num2: number) => number
// 1.函数的定义
function calc(callBackFn: callBackType) {
    const num1 = 10
    const num2 = 20
    const res = callBackFn(num1, num2)
    return res
}


// 2.函数的调用
// 2.1 匿名函数参数不需要写类型，会自动上下文推导
console.log(
    calc(function (num1, num2) {
        return num1 + num2
    })
);
// 2.2 
function add(num1:number,num2:number){
    return num1 + num2
}
console.log("相加：",calc(add));

// 不报错
function foo(num1:number){
    return num1
}
console.log(calc(foo));

export { }