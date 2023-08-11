interface IKun {
    name: string
    age: number
    slogan: string

    playBasketball: () => void
}

interface IRun {
    running: () => void
}

// IKun接口定义完两个地方可以使用
// 1.让接口直接作为类型
// 2.让某个类实现接口


// 1.让IKun接口直接作为类型
const ikun: IKun = {
    name: "坤坤",
    age: 18,
    slogan: "你干嘛!",
    playBasketball: function () { }
}

// 2.让Person类实现俩接口，接口里的属性和方法必须全实现
class Person implements IKun, IRun {
    name: string
    age: number
    slogan: string
    constructor(private _name:string,private _age:number,private _sologan:string){
        this.name = _name
        this.age = _age
        this.slogan = _sologan
    }

    playBasketball() {
        console.log(this.name+"在打篮球");
    }

    running() {
        console.log(this.name+"在跑步");
    }
}

const ikun2 = new Person("坤坤",18,"你干嘛!")
const ikun3 = new Person("huahua",20,"嘿嘿和")
console.log(ikun2.name, ikun2.age, ikun2.slogan)
ikun2.playBasketball()
ikun2.running()

export {}