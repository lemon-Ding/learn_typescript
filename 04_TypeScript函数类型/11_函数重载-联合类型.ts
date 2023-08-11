//1.联合类型实现(可以使用联合类型实现的情况, 尽量使用联合类型)
/* function getLength(arg:string|any[]) {
    return arg.length
} */

// 2.函数的重载
/* function getLength(arg:string):number
function getLength(arg:any[]):number

function getLength(arg){
    return arg.length
} */

// 3.对象类型实现
function getLength(arg:{length:number}){
    return arg.length
}
getLength("abc")
getLength(["a",1,3])
getLength({ length: 100 })

export { }