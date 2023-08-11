type IKun = "sing" | "dance" | "rap"

type MyExtract<T, E> = T extends E ? T : never


type IKuns = MyExtract<IKun, "rap" | "dance">


export { }
