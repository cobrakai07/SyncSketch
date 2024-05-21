interface DashboardLayoutProps {
  children: React.ReactNode;
}

import SiderBar from "./_components/sidebar/SiderBar";
import OrgSideBar from "./_components/OrgSideBar";
import NavBar from "./_components/NavBar";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <SiderBar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSideBar />
          <div className="h-full flex-1">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
