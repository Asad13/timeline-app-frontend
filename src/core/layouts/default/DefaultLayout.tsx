import { Outlet } from 'react-router';

const DefaultLayout = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
