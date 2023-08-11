// getLength(args:string | any[])： 限制传入的参数是string类型，或者Array类型（数组里值可以是任意类型）
// getLength(args:{length:number})：限制传入的参数是对象，具有length属性且值是number类型
function getLength(args:{length:number}){
    console.log(args.length);
}

getLength("aaaa")//包装类型字符串对象，有length属性值为4
getLength(["a","b",123]) //数组也是对象，有length属性值为3

const info = {
    length:200
}

getLength(info)//info对象有length属性并且是number类型

// getLength(123)
// getLength()//相当于传入了undefined


export {}