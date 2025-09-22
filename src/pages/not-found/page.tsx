import { Link } from 'react-router';
import Head from '@/components/common/Head';

const NotFound = () => {
  return (
    <>
      <Head title="Not Found" />
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h3>Oops!</h3>
        <h1>404 - Page Not Found</h1>
        <Link to="/" className="text-blue-700 underline">
          Go to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
