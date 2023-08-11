// any类型就表示不限制标识符的任意类型，并且可以在该标识符上面进行任意的操作(在TypeScript中回到Javascript中)
let id: any = 123

id = "bbbb"
id = true

console.log(id.length);

id = { name: "lihua", age: 18 }


// 定义数组
const infos:any[] = ["liming",123,true,{},[]]