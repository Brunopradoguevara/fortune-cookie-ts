import { useState } from 'react'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getElementRandomArray from './utils/getElementRandomArray.ts'
import { ArrPhrase } from './types.ts'

function App() {
  const phraseRandom = getElementRandomArray(phrases) 
  const numberRandom = getElementRandomArray([1,2,3,4]) as number

  const [quote, setQuote] = useState<ArrPhrase>(phraseRandom as ArrPhrase)
  const [numberBg, setNumberBg] = useState<number>(numberRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`     
  }

  return (
    <>
      <div className='min-h-screen bg-center bg-cover flex justify-center items-center flex-col gap-2' style={bgStyle}>
          <h1 className="text-3xl text-center w-11/12 font-bold md:text-5xl " style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }}>Galleta de la fortuna</h1>
          <Quote
            phrase = {quote}
          />
          <BtnQuote
            setQuote = {setQuote}
            phrases = {phrases}
            setNumberBg = {setNumberBg}
            numberBg = {numberBg}
          />
      </div>
    </>
  )
}

export default App
