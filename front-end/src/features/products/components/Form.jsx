import Label from "../../../components/atom/Label";
import Input from "../../../components/atom/Input";
import Button from "../../../components/atom/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../ProductSlice";
import { useParams } from "react-router-dom";

const Form = () => {
  const products = useSelector((state) => state.product.products);
  const { id, mode } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [dataForm, setDataForm] = useState({
    id: "",
    name_product: "",
    price: "",
    stok: "",
  });

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (dataForm.name_product === "") {
        setMessage("Harap isi nama produk");
      } else if (dataForm.price === "") {
        setMessage("Harap isi harga produk");
      } else if (dataForm.stok === "") {
        setMessage("Harap isi stok produk");
      } else {
        if (mode === "add") {
          dispatch(
            addProduct({
              id: Math.random(),
              name_product: dataForm.name_product,
              price: dataForm.price,
              stok: dataForm.stok,
            })
          );
          alert("berhasil");
          window.location.href = "/home";
        } else {
          dispatch(
            updateProduct({
              id: id,
              name_product: dataForm.name_product,
              price: dataForm.price,
              stok: dataForm.stok,
            })
          );
          alert("berhasil");
          window.location.href = "/home";
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <form
      className="p-3 flex flex-col gap-y-3 lg:w-3/5 lg:self-center"
      onSubmit={handleSubmit}
    >
      <section className="flex flex-col gap-y-1">
        <Label style="text-2xl">Nama Produk</Label>
        <p
          className={`${
            dataForm.name_product === "" ? "text-red-500" : "hidden"
          }`}
        >{`${dataForm.name_product === "" ? message : ""}`}</p>
        <Input
          type="text"
          name="name_product"
          value={dataForm.name_product}
          onChange={handleChange}
          style="border border-black p-3 rounded-lg"
          placeholder="Masukan Nama Produk"
        />
      </section>
      <section className="flex flex-col gap-y-1">
        <Label style="text-2xl">Harga Produk</Label>
        <p
          className={`${dataForm.price === "" ? "text-red-500" : "hidden"}`}
        >{`${dataForm.price === "" ? message : ""}`}</p>
        <Input
          type="number"
          name="price"
          value={dataForm.price}
          onChange={handleChange}
          style="border border-black p-3 rounded-lg"
          placeholder="Masukan Harga Produk"
        />
      </section>
      <section className="flex flex-col gap-y-1">
        <Label style="text-2xl">Stok</Label>
        <p
          className={`${dataForm.stok === "" ? "text-red-500" : "hidden"}`}
        >{`${dataForm.stok === "" ? message : ""}`}</p>
        <Input
          type="number"
          name="stok"
          value={dataForm.stok}
          onChange={handleChange}
          style="border border-black p-3 rounded-lg"
          placeholder="Masukan Stok Produk"
        />
      </section>
      <section className="flex gap-x-3 w-full text-white">
        <Button
          style="w-1/2 bg-red-500 px-7 py-2 lg:py-5 text-2xl rounded-md"
          onClick={() => (window.location.href = "/home")}
          type="button"
        >
          Batal
        </Button>
        <Button
          style="w-1/2 bg-green-500 px-7 py-2 rounded-md text-2xl"
          type="submit"
        >
          Simpan
        </Button>
      </section>
    </form>
  );
};

export default Form;
