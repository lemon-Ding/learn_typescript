interface IKun {
    name: string
    age: number
    slogan?: string
}

// 类型体操 自己实现Partial<Type>,用映射类型索引签名
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}


// IKun都变成可选的
type IKunOptional = MyPartial<IKun>

export { }
