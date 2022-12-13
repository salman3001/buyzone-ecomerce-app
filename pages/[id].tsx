import Image from 'next/image';
import Layout from '../components/Layout';

export default function Product() {
  return (
    <Layout title="product-name">
      <div className="flex-grow container mx-auto grid sm:grid-cols-3 gap-8 p-4  ">
        <div className="sm:col-span-2 border-2">
          <Image height={400} width={400} src={''} alt={''} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">T-Shirt</h1>
          <p>Price : 200 $</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid animi corrupti impedit iure dolores nihil
            quod itaque quaerat temporibus perspiciatis!
          </p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
        <div className="sm:col-span-3 border-2">reviews</div>
      </div>
    </Layout>
  );
}
