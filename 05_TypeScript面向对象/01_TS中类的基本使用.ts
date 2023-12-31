class Person {
    // 成员属性: 声明成员属性
    name = ""//属性初始化：当new时没传参数时，默认值为"",类型推导为string
    age = 0//属性初始化：当new时没传参数时，默认值为0,类型推导为number
    // name: string
    // age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log(this.name + " eating")
    }

    running() {
        console.log(this.name + " running")
    }
}

// 实例对象: instance
const p1 = new Person("why", 18)
const p2 = new Person("kobe", 30)

console.log(p1.name, p2.age)

export { }

