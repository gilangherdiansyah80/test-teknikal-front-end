import Label from "../../../components/atom/Label";
import Input from "../../../components/atom/Input";
import Button from "../../../components/atom/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../ProductSlice";
import { useParams, useNavigate } from "react-router-dom";

const Form = () => {
  const products = useSelector((state) => state.product.products);
  const { id, mode } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name_product: "",
    price: "",
    stok: "",
  });
  const [dataForm, setDataForm] = useState({
    id: "",
    name_product: "",
    price: "",
    stok: "",
  });

  // Load data produk saat mode edit
  useEffect(() => {
    if (mode === "edit" && id) {
      const productToEdit = products.find((product) => product.id == id);
      if (productToEdit) {
        setDataForm({
          id: productToEdit.id,
          name_product: productToEdit.name_product,
          price: productToEdit.price,
          stok: productToEdit.stok,
        });
      }
    }
  }, [mode, id, products]);

  // Simpan products ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });

    // Clear error saat user mulai mengetik
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Fungsi validasi case-insensitive dengan pengecualian untuk mode edit
  const isProductExists = (productName, currentProductId = null) => {
    const normalizedProductName = productName.trim().toLowerCase();

    return products.some((product) => {
      const normalizedExistingName = product.name_product.trim().toLowerCase();

      // Cek apakah nama sama (case-insensitive) dan bukan produk yang sedang diedit
      return (
        normalizedExistingName === normalizedProductName &&
        product.id !== currentProductId
      );
    });
  };

  // Fungsi validasi form
  const validateForm = () => {
    const newErrors = {
      name_product: "",
      price: "",
      stok: "",
    };
    let isValid = true;

    // Validasi nama produk
    if (dataForm.name_product.trim() === "") {
      newErrors.name_product = "Harap isi nama produk";
      isValid = false;
    } else if (mode === "add" && isProductExists(dataForm.name_product)) {
      newErrors.name_product =
        "Produk dengan nama yang sama sudah ada (tidak peduli huruf besar/kecil)";
      isValid = false;
    } else if (mode === "edit" && isProductExists(dataForm.name_product, id)) {
      newErrors.name_product =
        "Produk dengan nama yang sama sudah ada (tidak peduli huruf besar/kecil)";
      isValid = false;
    }

    // Validasi harga
    if (dataForm.price === "" || dataForm.price <= 0) {
      newErrors.price = "Harap isi harga produk dengan nilai yang valid";
      isValid = false;
    }

    // Validasi stok
    if (dataForm.stok === "" || dataForm.stok < 0) {
      newErrors.stok = "Harap isi stok produk dengan nilai yang valid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    if (!validateForm()) {
      return;
    }

    try {
      if (mode === "add") {
        dispatch(
          addProduct({
            id: Date.now(), // Lebih baik dari Math.random()
            name_product: dataForm.name_product.trim(),
            price: Number(dataForm.price),
            stok: Number(dataForm.stok),
          })
        );
        alert("Produk berhasil ditambahkan!");
      } else if (mode === "edit") {
        dispatch(
          updateProduct({
            id: id,
            name_product: dataForm.name_product.trim(),
            price: Number(dataForm.price),
            stok: Number(dataForm.stok),
          })
        );
        alert("Produk berhasil diupdate!");
      }

      navigate("/home");
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi kesalahan, silakan coba lagi");
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <form
      className="p-3 flex flex-col gap-y-3 lg:w-3/5 lg:self-center"
      onSubmit={handleSubmit}
    >
      <section className="flex flex-col gap-y-1">
        <Label style="text-2xl">Nama Produk</Label>
        {errors.name_product && (
          <p className="text-red-500 text-sm">{errors.name_product}</p>
        )}
        <Input
          type="text"
          name="name_product"
          value={dataForm.name_product}
          onChange={handleChange}
          style={`border p-3 rounded-lg ${
            errors.name_product ? "border-red-500" : "border-black"
          }`}
          placeholder="Masukan Nama Produk"
        />
      </section>

      <section className="flex flex-col gap-y-1">
        <Label style="text-2xl">Harga Produk</Label>
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        <Input
          type="number"
          name="price"
          value={dataForm.price}
          onChange={handleChange}
          style={`border p-3 rounded-lg ${
            errors.price ? "border-red-500" : "border-black"
          }`}
          placeholder="Masukan Harga Produk"
          min="0"
        />
      </section>

      <section className="flex flex-col gap-y-1">
        <Label style="text-2xl">Stok</Label>
        {errors.stok && <p className="text-red-500 text-sm">{errors.stok}</p>}
        <Input
          type="number"
          name="stok"
          value={dataForm.stok}
          onChange={handleChange}
          style={`border p-3 rounded-lg ${
            errors.stok ? "border-red-500" : "border-black"
          }`}
          placeholder="Masukan Stok Produk"
          min="0"
        />
      </section>

      <section className="flex gap-x-3 w-full text-white">
        <Button
          style="w-1/2 bg-red-500 px-7 py-2 lg:py-5 text-2xl rounded-md hover:bg-red-600 transition"
          onClick={handleCancel}
          type="button"
        >
          Batal
        </Button>
        <Button
          style="w-1/2 bg-green-500 px-7 py-2 rounded-md text-2xl hover:bg-green-600 transition"
          type="submit"
        >
          Simpan
        </Button>
      </section>
    </form>
  );
};

export default Form;
