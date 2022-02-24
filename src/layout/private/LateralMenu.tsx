import { useLocation } from "react-router";
import AppLogo from "../../components/images/AppLogo";
import ChartIcon from "../../components/images/ChartIcon";
import DashboardIcon from "../../components/images/DashboardIcon";
import LogoutIcon from "../../components/images/LogoutIcon";
import TicketIcon from "../../components/images/TicketIcon";
import { useAuth } from "../../contexts/AuthContext";
import MenuItem from "./MenuItem";

const LateralMenu = () => {
  const location = useLocation();

  const { user, Logout } = useAuth();

  const items = [
    {
      label: "Dashboard",
      icon: (
        <DashboardIcon
          color={location.pathname === "/" ? "#605BFF" : "#818194"}
        />
      ),
      route: "/"
    },
    {
      label: "Análise",
      icon: (
        <ChartIcon
          color={location.pathname === "/analise" ? "#605BFF" : "#818194"}
        />
      ),
      route: "/analise"
    },
    {
      label: "Gastos",
      route: "/gastos",
      icon: (
        <TicketIcon
          color={location.pathname === "/gastos" ? "#605BFF" : "#818194"}
        />
      )
    }
  ];

  return (
    <div className="shadow-sm h-screen bg-white relative">
      <div className="px-20 mt-12">
        <div>
          <AppLogo width="50" height="50" />
        </div>
      </div>
      <div className="mt-12 flex flex-col">
        {items.map((item) => (
          <MenuItem
            key={item.route}
            icon={item.icon}
            label={item.label}
            route={item.route}
            opacity={location.pathname === item.route ? "20" : "0"}
            color={location.pathname === item.route ? "primary" : "gray-dark"}
          />
        ))}
      </div>
      <div
        className="absolute bottom-0 pb-11 left-0 right-0 cursor-pointer hover:opacity-70"
        onClick={Logout}
      >
        <div className="flex flex-row justify-center items-center gap-5">
          <span className="font-semibold text-sm">
            {user.name.split(" ")[0] +
              " " +
              user.name.split(" ")[user.name.split(" ").length - 1]}
          </span>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};
export default LateralMenu;
