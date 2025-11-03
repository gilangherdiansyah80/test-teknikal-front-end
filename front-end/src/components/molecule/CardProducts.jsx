import { useSelector } from "react-redux";
import Button from "../atom/Button";
// import { deleteProduct } from "../../features/products/ProductSlice";

const CardProducts = () => {
  const products = useSelector((state) => state.product.products);
  //   const dispatch = useDispatch();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <>
      {products.length === 0 ? (
        <main>
          <h1>Product Tidak Tersedia</h1>
        </main>
      ) : (
        products.map((item) => {
          return (
            <main
              key={item.id}
              className="w-full flex flex-col gap-y-2 shadow-black shadow-sm"
            >
              <div className="bg-gray-300 p-3 flex justify-center items-center h-52">
                <img src="/vite.svg" alt="" className="w-40" />
              </div>

              <section className="p-3 flex flex-col gap-y-1 items-center">
                <h1 className="text-xl font-bold">{item.name_product}</h1>
                <p className="text-2xl font-bold">{formatPrice(item.price)}</p>
                <span>{item.stok}</span>
              </section>

              <section className="flex gap-x-3 w-full p-3 text-white">
                <Button style="w-1/2 bg-red-500 py-2 rounded-md text-xl">
                  Hapus
                </Button>
                <Button
                  style="w-1/2 bg-green-500 py-2 rounded-md text-xl"
                  onClick={() =>
                    (window.location.href = `update-product/edit/${item.id}`)
                  }
                >
                  Edit
                </Button>
              </section>
            </main>
          );
        })
      )}
    </>
  );
};

export default CardProducts;
