import Head from 'next/head'
import useStore from '../context/useStateStore'

export default function Home() {
  const {cartState,cartDispatch} = useStore()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="BuyZone- E-commerce App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {cartState.cartCount}
        
      </div>
      <div>
      </div>
 <button onClick={()=>cartDispatch({type:"add"})}>increese</button>
 <button onClick={()=>cartDispatch({type:"remove"})}>decrese</button>
    </div>
  )
}
