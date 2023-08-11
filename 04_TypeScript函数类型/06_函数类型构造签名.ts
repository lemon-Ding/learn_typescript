//箭头函数不能new调用没有显式原型
const foo = function () {

}

const f = new foo()

class Person {
}

interface ICTORPerson {
    new(): Person
}

function factory(fn: ICTORPerson) {
    const f = new fn() 
    return f
}

factory(Person)

export {}

