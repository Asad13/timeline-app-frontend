import { useRouteError } from 'react-router';
import ErrorFallback from '@/components/common/ErrorFallback';

const RouteErrorBoundary = () => {
  const error = useRouteError();

  if (import.meta.env.DEV) console.error(error);

  return <ErrorFallback />;
};

export default RouteErrorBoundary;
