import { Suspense, type SuspenseProps } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Loader from '@/components/common/Loader/Loader';

const SuspenseWithErrorBoundary = ({ children, fallback, name }: SuspenseProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback ?? <Loader />} name={name ?? 'AppSuspense'}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseWithErrorBoundary;
