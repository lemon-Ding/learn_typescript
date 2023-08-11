interface IKun {
    name: string
    age: number
    slogan?: string
}

// 确定keys一定是可以作为key的联合类型
type MyOmit<T, K extends keyof T> = {
    //全部遍历完后，在k里面的排除
    [P in keyof T as P extends K ? never : P]: T[P]
}

// 自己的Omit
type IKuns = MyOmit<IKun, "slogan" | "name">


export { }
