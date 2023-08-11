// string: TypeScript给我们定义标识符时,提供的字符串类型
// String: Javascript中字符串的包装类
let message: string = "hello World"
// message = 123//不能将类型“number”分配给类型“string”
message = "123"
function logMessage(msg:string){
    console.log(msg);
    
}

logMessage(message)

export {}