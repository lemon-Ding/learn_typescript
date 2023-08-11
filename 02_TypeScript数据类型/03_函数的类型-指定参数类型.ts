//在定义一个TypeScript中的函数时,都要明确的指定参数的类型
function sum(num1:number,num2:number){
    return num1 + num2
}

// 类型推导出返回值类型为number，可以不指定返回值类型
const res = sum(123,123)

// sum({},{})类型“{}”的参数不能赋给类型“number”的参数
export {}