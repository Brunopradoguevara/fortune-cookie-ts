import './Quote.type'
import { Prop } from './Quote.type'

const Quote = ( {phrase}:Prop ) => {
    return (
      <p className="font-caveat bg-[url('/rectangulo.png')] w-11/12 max-w-lg bg-center bg-cover py-8 px-4 leading-6 rounded-xl text-2xl my-4 md:text-4xl md:py-16 md:px-6">
        {phrase.phrase}
      </p>
    )
  }
  
  export default Quote