//明确指定返回值类型
//返回值类型可以明确的指定，也可以自动进行类型推导
function sum(num1:number,num2:number): number{
    return num1 + num2
}

const res = sum(123,123)

// sum({},{})类型“{}”的参数不能赋给类型“number”的参数
export {}