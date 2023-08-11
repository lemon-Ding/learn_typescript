interface IKun {
    name: string
    age: number
    slogan?: string
}

// 确定keys一定是可以作为key的联合类型
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}


type IKuns = MyPick<IKun, "slogan" | "name">


export { }
