import Image from 'next/image';
import { useCartState } from "../context/cart";
interface ItemCardProp {
  _id: number;
  itemName: string;
  price: number;
  inStock: number;
  photos: string[];
}

export default function ProductCard(prop: ItemCardProp) {
  const [cartState, cartAction] = useCartState()
  function addToCart() {
    cartAction({ type: "add", payload: prop._id })
  }
  return (
    <div className="card card-bordered">
      <div className="card-body border-2 ">
        <Image src="/fd" alt="dsf" width={200} height={200} />

        <div className="card-title link link-hover font-bold">{prop.itemName}</div>
        <div>{prop.price} $</div>
        <div className="">
          <button onClick={() => addToCart()} className="btn btn-primary btn-xs">add to cart</button>
        </div>
      </div>
    </div>
  );
}
