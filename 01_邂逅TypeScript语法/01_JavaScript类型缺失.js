function getLength(args) {
    console.log(args.length);
}


getLength("1234")   //4
getLength([1, 2, 4]) //3

getLength(12) //undefined   包装类型new Number()创建了一个对应的基本包装类型Number对象但是没有length属性  getLength({})
getLength() //undefined.length    Uncaught TypeError: Cannot read properties of undefined (reading 'length')