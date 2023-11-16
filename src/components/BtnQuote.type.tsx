import { ArrPhrase } from "../types"

export type Prop ={
    setQuote:React.Dispatch<React.SetStateAction<ArrPhrase>>
    phrases: ArrPhrase[]
    setNumberBg:React.Dispatch<React.SetStateAction<number>>
    numberBg:number
}