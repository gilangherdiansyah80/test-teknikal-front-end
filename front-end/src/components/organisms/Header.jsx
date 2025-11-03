import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex w-full bg-red-700 p-3 text-white">
      <nav className="self-end">
        <ul className="flex gap-x-3">
          <Link to="/home">
            <li className="text-2xl">Home</li>
          </Link>
          <span className="text-2xl">|</span>
          <Link to="/add-product/add">
            <li className="text-2xl">Tambah Data</li>
          </Link>
          <span className="text-2xl">|</span>
          <Link to="/list-api">
            <li className="text-2xl">List Api</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
