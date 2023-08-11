// 类型推导 实际上  let info = {name:string;age:number;}
let info = {
    name:"huihui",
    age:18
}


console.log(info.name);

export {}

const s1:symbol = Symbol("festival")
const s2:symbol = Symbol("festival")

const person = {
    [s1]:"父亲节",
    [s2]:"母亲节"
}

 