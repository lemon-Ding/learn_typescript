// 1.区别一: type类型使用范围更广 接口类型只能用来声明对象
type myNumber = number
type IDType = number | string


// 2.区别二：在声明对象时，interface可以多次声明
// 2.1. type不允许两个相同名称的别名同时存在

// 2.2. interface可以多次声明同一个接口名称
interface PointType2 {
    x: number,
    y: number
} 

interface PointType2 {
    z?: number
}

const point: PointType2 = {
    x: 100,
    y: 90
}

// 3.interface支持继承的
interface IAnimal {
    category: string
}

interface ICat extends IAnimal {
    name: string,
    age: number
}

const cat1: ICat = {
    category: "猫",
    name: "花花",
    age: 2
}

// 4.interface可以被类实现（TS面向对象时候再讲）


// 总结: 如果是非对象类型的定义使用type,如果是对象类型的声明那么使用interface


export { }