import Image from 'next/image'
interface ItemCardProp {
    _id: number,
    itemName: string,
    price: number,
    inStock: number,
    photos: string[]
}

export default function ProductCard(prop: ItemCardProp) {
    return (
        <div className="card card-bordered">
            <div className="card-body border-2 ">
                <Image src='/fd' alt='dsf' width={200} height={200} />

                <div className="card-title link link-hover font-bold">{prop.itemName}</div>
                <div  >
                    {prop.price} $
                </div>
                <div className="">
                    <button className="btn btn-primary btn-xs">add to cart</button>
                </div>
            </div>
        </div>
    )
}