import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";

const Layout = () => {
  return (
    <div className="h-[95vh] m-4 border rounded-md overflow-hidden">
      <div className="fixed w-[300px] h-[94.8vh] rounded-bl-md border-r ">
        <Sider />
      </div>
      <div className="flex h-full w-full justify-end">
        <div className="h-full w-[calc(100vw-350px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
