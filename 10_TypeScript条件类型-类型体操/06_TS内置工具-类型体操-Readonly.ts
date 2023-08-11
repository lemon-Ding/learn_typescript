interface IKun {
    name: string
    age: number
    slogan?: string
}

// 类型体操
type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}


// IKun都变成只读的（内置泛型类型工具Readonly<Type>函数和自己实现）
type IKun2 = Readonly<IKun>
// type IKun2 = MyReadonly<IKun>

export { }
