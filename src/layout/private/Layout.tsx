import LateralMenu from "./LateralMenu";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row">
      <LateralMenu />
      <div className="bg-secondary w-full">{children}</div>
    </div>
  );
};

export default Layout;
