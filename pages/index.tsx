import Head from 'next/head'
import { useCartStore } from '../context/cart'
import { useUserState } from '../context/user'

export default function Home() {

  const [cartState, cartDispatch] = useCartStore()
  const [userState, userDispatch] = useUserState()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="BuyZone- E-commerce App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {cartState.count}

      </div>
      <div>
      </div>
      <button onClick={() => cartDispatch({ type: "add" })} >add</button>
      <br />
      <button onClick={() => cartDispatch({ type: "remove" })} >remove</button>
       <br />
       <br />
       <br />
       <div>
            {userState.name} <br />
            {userState.age}
       </div>
       <button onClick={()=>userDispatch({type:"changeName",payload:"rinku"})}>changname</button>
       <br />
       <button onClick={()=>userDispatch({type:"getOlder"})}>getolder</button>
    
    </div>
  )
}
