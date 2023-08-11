 


interface IKun {
    name: string
    age: number
}

interface ICoder {
    name: string
    coding: () => void
}

type InfoType = IKun & ICoder

const info: InfoType = {
    name: "why",
    age: 18,
    coding: function () {
        console.log("coding")
    }
}