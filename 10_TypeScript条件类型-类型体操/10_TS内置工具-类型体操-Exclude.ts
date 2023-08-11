type IKun = "sing" | "dance" | "rap"


type MyExclude<T, E> = T extends E ? never : T


type IKuns = MyExclude<IKun, "rap">


export { }
