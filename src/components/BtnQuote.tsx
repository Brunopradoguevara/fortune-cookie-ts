import { ArrPhrase } from "../types"
import getElementRandomArray from "../utils/getElementRandomArray"
import './BtnQuote.type'
import {Prop } from "./BtnQuote.type"

const BtnQuote = ({quote,setQuote,phrases,setNumberBg,numberBg}:Prop) => { 
 
    const handleRandomPhrase = () =>{
        let newNumberBackground: number
        let newQuote: ArrPhrase
         do{
           newQuote = getElementRandomArray(phrases) as ArrPhrase;
         }while(quote === newQuote);

        do{
          newNumberBackground = getElementRandomArray([1,2,3,4]) as number
         }while(numberBg === newNumberBackground);

         setQuote(newQuote);
         setNumberBg(newNumberBackground);
    }

  return (
    <button className="py-4 px-2 bg-white rounded-3xl text-xl opacity-50 cursor-pointer ease-in-out duration-300 hover:opacity-100 hover:scale-105 hover:shadow-lg hover:shadow-black  md:text-3xl md:py-7 md:px-3" onClick={handleRandomPhrase} >Nueva frase🍀</button>
  )
}

export default BtnQuote