import { ArrPhrase } from "../types"

const getElementRandomArray = (arr: string[]|number[]|ArrPhrase[]):string | number | ArrPhrase => {
    const indexRandom:number = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
}

export default getElementRandomArray