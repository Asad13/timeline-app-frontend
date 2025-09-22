import { useNavigation, ScrollRestoration, Outlet } from 'react-router';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = navigation.state !== 'idle';

  return (
    <>
      <div className={isNavigating ? 'page-loading' : ''}>
        <Outlet />
      </div>
      <ScrollRestoration storageKey="timelines-scroll-positions" />
    </>
  );
};

export default Root;
