import { Link } from "react-router-dom";

const HeaderDashboard = () => {
  return (
    <header className="flex w-full bg-red-700 p-3 text-white">
      <nav className="self-end">
        <ul className="flex gap-x-3">
          <Link to="/home">
            <li className="text-2xl">Products</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDashboard;
