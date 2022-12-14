import Image from 'next/image';
import Layout from '../components/Layout';

export default function Product() {
	return (
		<Layout title="product-name">
			<div className="container mx-auto grid flex-grow gap-8 p-4 sm:grid-cols-3  ">
				<div className="border-2 sm:col-span-2">
					<Image height={400} width={400} src="" alt="" />
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">T-Shirt</h1>
					<p>Price : 200 $</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid animi corrupti impedit iure dolores nihil
						quod itaque quaerat temporibus perspiciatis!
					</p>
					<button className="btn-primary btn">Add to cart</button>
				</div>
				<div className="border-2 sm:col-span-3">reviews</div>
			</div>
		</Layout>
	);
}
