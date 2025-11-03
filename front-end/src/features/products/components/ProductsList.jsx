import CardProducts from "../../../components/molecule/CardProducts";

const ProductList = () => {
  return (
    <main className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
      <CardProducts />
    </main>
  );
};

export default ProductList;
