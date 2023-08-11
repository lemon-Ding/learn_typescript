import { sum } from "./utils/math";
console.log(sum(10, 20));

// 导入的是类型,推荐在类型的前面加上type关键
// 作用：只有代码编写时做类型检测需要，代码编译后不需要可以移除掉
// import { type IDType, type IPerson } from "./utils/type";
import type { IDType, IPerson } from "./utils/type";

const id: IDType = 111
const p: IPerson = { name: "jack", age: 18 }

// 使用命名空间中的内容
import { price, date } from "./utils/format";

price.format("1111")
date.format("22222")




