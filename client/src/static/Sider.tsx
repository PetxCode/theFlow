import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Sider = () => {
  const navData = [
    {
      id: 1,
      title: "Read",
      path: "/",
      icon: <FaBookOpen />,
    },
    {
      id: 1,
      title: "Create",
      path: "/create",
      icon: <FaBookOpen />,
    },
  ];
  return (
    <div>
      <div className="mt-20">
        <div>
          {navData.map((item) => (
            <div key={item.id} className="">
              <NavLink
                to={`${item.path}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 px-4 bg-black mx-1 py-3 text-white my-2 rounded-md transition-all duration-300 items-center "
                    : "flex gap-2 px-4 bg-slate-100 hover:bg-slate-200 mx-1 py-3 text-text my-2 rounded-md transition-all duration-300 items-center"
                }
              >
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sider;
