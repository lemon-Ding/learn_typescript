type IKun = "sing" | "dance" | "rap" | null | undefined

type MyNonNullable<T> = T extends null | undefined ? never : T


type IKuns = MyNonNullable<IKun>

export { }
