import { useNavigate } from "react-router";

type MenuItemProps = {
  color: string;
  opacity: string;
  label: string;
  icon: React.ReactNode;
  route: string;
};

const MenuItem = ({ color, label, icon, route, opacity }: MenuItemProps) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(route);
  };

  return (
    <div
      onClick={handleRedirect}
      className={`mb-8 cursor-pointer relative before:absolute before:h-full before:w-24 before:left-0 before:bg-gradient-to-r before:from-primary before:via-white ${opacity}`}
    >
      <div className="px-9 py-3 flex flex-row items-center justify-start gap-4">
        {icon}
        <span className={`font-semibold text-${color} hidden md:block`}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
