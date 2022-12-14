import Layout from '../../components/Layout';
export default function Cart() {
	return (
		<Layout title="Cart">
			<div className=" container mx-auto grid gap-4 p-4 sm:grid-cols-3">
				<div className="flex flex-col gap-2 sm:col-span-2">
					<Item />
				</div>
				<div className="flex flex-col gap-4 border-2 p-4">
					<table className=" ">
						<tbody>
							<tr className="table-row">
								<td>Total Items</td>
								<td>4</td>
							</tr>
							<tr>
								<td>Sub Total</td>
								<td>400 $</td>
							</tr>
						</tbody>
					</table>
					<button className="btn-primary btn-sm btn">Check Out !</button>
				</div>
			</div>
		</Layout>
	);
}

const Item = () => (
	<div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
		<div className="flex gap-2">
			<div className="inline-block h-16 w-16 rounded border-2"></div>
			<div>
				<h2>item name</h2>
				<h2>100 $</h2>
			</div>
		</div>
		<div className="flex items-center">
			<button className="btn-ghost btn-sm btn mx-1 justify-center text-2xl">+</button>
			<span>Qty: 2</span>
			<button className="btn-ghost btn-sm btn mx-1 text-2xl">-</button>
			<button className="btn-primary btn-xs btn mx-1">Del</button>
		</div>
	</div>
);
