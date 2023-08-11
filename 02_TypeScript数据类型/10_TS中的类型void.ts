// 1.在TS中如果一个函数没有任何的返回值,那么返回值的类型就是void类型
// 2.如果返回值是void类型，那么我们也可以返回undefined(TS编译器允许这样做而己)
function sum(num1: number, num2: number): void {
    console.log("没有返回值");
}

// 应用场景: 用来指定函数类型并且返回值是void
type FooType = () => void
const foo: FooType = () => { }


// 举个例子：定义要传递的参数是函数类型才指定void(涉及给函数定义类型问题，后续还会详细讲解))
// 1.定义要求传入的函数的类型，参数和类型任意
type ExecFnType = (...args: any[]) => void
// type ExecFnType = (name:string,age:number) => void

// 2.定义一个函数，并且接收的参数也是一个函数，而且这个函数的类型必须是ExecFnType
function delayExecFn(fn:ExecFnType){
    setTimeout(()=>{
        fn("huahua",18)
    },1000)
}
// 3.执行上面的函数，并且传入一个匿名函数
delayExecFn((name,age)=>{
    console.log(name,age);
})

export { }