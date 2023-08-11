// 1.联合类型的基本使用
let foo:number | string = "abc"
// 使用的时候要小心
// console.log(foo.length);错误的写法number类型没有length属性
if(typeof foo === "string"){
    console.log(foo.length);//3
}

// 打印id
function printID(id:number | string){
    console.log("您的ID是:",id);

    //类型缩小,确定id是string类型
    if(typeof id === "string"){
        console.log(id.length,id.toUpperCase());
    }else{
        console.log(id);
    }
}

printID("abc")
printID(123)

export {}