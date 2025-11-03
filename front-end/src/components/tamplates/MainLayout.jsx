import Header from "../organisms/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="flex flex-col gap-3">
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
