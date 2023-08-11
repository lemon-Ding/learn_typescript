interface Iperson {
    name: string
    age: number
}
// TypeScript提供了映射类型: 函数
// 映射类型不能使用interface定义
// Type = IPerson
// keyof = "name" | "age"
type MapPerson<Type> = {
    // 索引签名在这进行使用
    [property in keyof Type]: Type[property]

    // name: string
    // age: number
}


// NewPerson类型需要基于另外Iperson类型
type NewPerson = MapPerson<Iperson>