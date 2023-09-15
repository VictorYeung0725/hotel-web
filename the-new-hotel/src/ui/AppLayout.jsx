import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

function AppLayout() {
  return (
    <div>
      App AppLayout
      <Header />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
