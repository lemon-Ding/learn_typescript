interface IPerson{
    name:string,
    age:number,
    friend?:{
        name:string
    }
}

const info:IPerson = {
    name:"haha",
    age:10
}

//访问属性: 可选链: ?.
console.log(info.friend?.name);

// 属性赋值不能用可选链
// 解决方案一：类型缩小
if(info.friend){
    info.friend.name = "kobe"
}
// 解决方案二：非空类型断言!（有点危险，, 只有确保friend一定有值的情况, 才能使用）
info.friend!.name = "james"

export {}