import { HelmetProvider } from 'react-helmet-async';
import type { ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default Provider;
