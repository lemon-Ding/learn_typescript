class Person {
    // 私有属性: 属性前面会使用_
    private _name: string
    private _age: number


    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }



    public set name(newValue: string) {
        this._name = newValue;
    }


    public get name(): string {
        return this._name
    }

    // setter/getter: 对属性的访问进行拦截操作
    set age(newValue: number) {
        if (newValue >= 0 && newValue < 200) {
            this._age = newValue
        }
    }

    get age(): number {
        return this._age
    }

}
const p = new Person('花花', 20)
p.name = "kobe"
console.log(p.name);//kobe

p.age = -10
console.log(p.age);//20

export { }
