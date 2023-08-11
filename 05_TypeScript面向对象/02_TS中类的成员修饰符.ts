class Person {
    public name: string
    protected age: number
    private hobby: string

    constructor(name: string, age: number, hobby: string) {
        this.name = name
        this.age = age
        this.hobby = hobby
    }

    // 方法变成私有方法: 只有在类内部才能访问
    private eating() {
        console.log("吃东西", this.age, this.name)
    }
}




const p = new Person("小明", 18, "篮球")
// console.log(p.name, p.age)  属性“age”受保护，只能在类“Person”及其子类中访问。
p.name = "kobe"
//p.eating()    属性“eating”为私有属性，只能在类“Person”中访问


// 子类中是否可以访问
class Student extends Person {
    grade: number
    constructor(name: string, age: number, hobby: string, grade: number) {
        super(name, age, hobby)
        this.grade = grade
    }

    studying() {
        console.log(this.name + " 在学习" + " 他期中考试考了" + this.grade);
    }
}

const stu = new Student("小华",18,"羽毛球",100)
stu.studying()