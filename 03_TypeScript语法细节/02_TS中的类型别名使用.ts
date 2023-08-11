// 类型别名type
type myNumber = number
const age: myNumber = 18

//给ID的类型起个别名
type IDType = number | string
function printID(id: IDType) {
    console.log(id);
}

// 打印坐标
type pointType = { x: number, y: number, z?: number }
function printCoordinate(point: pointType) {
    console.log(point.x, point.y, point.z);
}
printCoordinate({x:10,y:20})