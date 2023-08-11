class Point<Type = number> {
    private _x: Type
    private _y: Type

    constructor(x: Type, y: Type) {
        this._x = x
        this._y = y
    }

    public set x(newValue: Type) {
        this._x = newValue
    }

    public get x(): Type {
        return this._x
    }

    public set y(newValue: Type) {
        this._y = newValue
    }
    public get y(): Type {
        return this._y
    }
}

const p1 = new Point(10, 20)
console.log(p1.x) //10
const p2 = new Point("123", "321")
console.log(p2.x)  //123

export { }
