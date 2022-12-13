import Layout from '../../components/Layout';
export default function Cart() {
  return (
    <Layout title="Cart">
      <div className=" container mx-auto grid sm:grid-cols-3 gap-4 p-4">
        <div className="sm:col-span-2 flex flex-col gap-2">
          <Item />
        </div>
        <div className="flex flex-col gap-4 p-4 border-2">
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
          <button className="btn btn-primary btn-sm">Order Now</button>
        </div>
      </div>
    </Layout>
  );
}

const Item = () => (
  <div className="w-full flex flex-col sm:flex-row gap-2 items-center sm:justify-between">
    <div className="flex gap-2">
      <div className="h-16 w-16 inline-block border-2 rounded"></div>
      <div>
        <h2>item name</h2>
        <h2>100 $</h2>
      </div>
    </div>
    <div className="flex items-center">
      <button className="btn btn-ghost text-2xl">+</button>
      <span>Qty: 2</span>
      <button className="btn btn-ghost text-2xl">-</button>
      <button className="btn btn-primary">Del</button>
    </div>
  </div>
);
