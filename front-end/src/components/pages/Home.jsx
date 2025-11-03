import ProductList from "../../features/products/components/ProductsList";

const Home = () => {
  return (
    <main className="w-full p-3 flex flex-col gap-y-3 lg:w-3/5 lg:self-center">
      <h1 className="text-4xl font-semibold">List Products</h1>
      <ProductList />
    </main>
  );
};

export default Home;
