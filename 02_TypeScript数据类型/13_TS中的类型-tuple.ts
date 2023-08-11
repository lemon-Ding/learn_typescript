// 保存我的个人信息:lemon 22 1.88
// 1.使用数组 
// 不合适：数组中最好存放相同的数据类型
const info1: any[] = ["lemon", 22, 1.88]
// 获取值之后不能明确的知道对应的数据类型
const value = info1[2]
console.log(value);

// 2.使用对象类型（最多）
const info2 = {
    name: "lemon",
    age: 22,
    height: 1.88
}

// 3.使用元组类型
// 类型推导联合类型info3: (string | number)[]
// const info3 = ["lemon",22,1.88]
// 元组数据结构中可以存放不同的数据类型，·取出来的item也是有明确的类型
const info3: [string, number, number] = ["lemon", 22, 1.88]
const value2 = info3[2]



// 在函数中返回多个值时使用元组类型最方便
function useState(initialState: number): [number, (newValue: number) => void] {
    let stateValue = initialState
    function setValue(newValue: number) {
        stateValue = newValue
    }

    return [stateValue, setValue]
}


const [count, setCount] = useState(10)
console.log(count);//10
setCount(100)
console.log(count);//100

export { }
