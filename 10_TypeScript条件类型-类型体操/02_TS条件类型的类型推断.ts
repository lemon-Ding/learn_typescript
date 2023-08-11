type CalcFnType = (num1: number, num2: string) => number

function foo() {
    return "abc"
}


// 总结类型体操题目: MyReturnType(自己封装个)  要求必须是函数类型extends (...args: any[]) => any
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never


// 获取一个函数的返回值类型: 内置工具ReturnType<CalcFnType>
type CalcReturnType = MyReturnType<CalcFnType>
type FooReturnType = MyReturnType<typeof foo>
// type FooReturnType2 = MyReturnType<boolean>  类型“boolean”不满足约束“(...args: any[]) => any”

type CalcParameterType = MyParameterType<CalcFnType>

export { }
