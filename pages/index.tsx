import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import data from '../utils/sampleData.json';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="container mx-auto py-2  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 ">
        <ProductCard
          _id={data._id}
          itemName={data.itemName}
          price={data.price}
          photos={data.photos}
          inStock={data.inStock}
        />
        <ProductCard
          _id={data._id}
          itemName={data.itemName}
          price={data.price}
          photos={data.photos}
          inStock={data.inStock}
        />
      </div>
    </Layout>
  );
}
