// 需求: 只能将两个数字或者两个字符串进行相加
// 案例分析: any不能实现将两个数字或者两个字符串进行相加,有隐患
/* function add(arg1, arg2) {
    return arg1 + arg2
}


add(10, 20)
add("abc", "cba")
add({ name: "xiaoming" }, 123)
 */

// 1.案例实现：两个函数
// function add1(num1: number, num2: number) {
//   return num1 + num2
// }

// function add2(str1: string, str2: string) {
//   return str1 + str2
// }

// add1(10, 20)
// add2("abc", "cba")

// 2.错误的做法: 联合类型不可以
// function add(arg1: number|string, arg2: number|string) {
//   return arg1 + arg2
// }

// 3.TypeScript中函数的重载写法
// 3.1.先编写重载签名
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

// 3.2.编写通用的函数实现
function add(arg1: any, arg2: any): any {
  return arg1 + arg2
}

add(10, 20)
add("aaa", "bbb")
// 通用函数不能被调用
// add({name: "why"}, "aaa")
// add("aaa", 111)

export {}