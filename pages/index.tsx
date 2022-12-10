import Head from 'next/head'
import { useStore } from '../context/store'

export default function Home() {
  const { state, dispatch } = useStore()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="BuyZone- E-commerce App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {state.cart.cartItems.length}
        
      </div>
      <div>
        {state.cart.cartItems}
      </div>
      <button onClick={()=>dispatch({type:"ADD ITEM"})}>change to rinku</button>

    </div>
  )
}
