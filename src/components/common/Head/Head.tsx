import { Helmet, type HelmetProps } from 'react-helmet-async';
import { APP_NAME } from '@/core/constants/app';
import type { ReactNode } from 'react';

interface HeadProps extends HelmetProps {
  children?: ReactNode;
}

const Head = ({ title, children, ...args }: HeadProps) => {
  return (
    <Helmet {...args}>
      <title>
        {APP_NAME}
        {title !== undefined ? ` - ${title}` : ''}
      </title>
      {children}
    </Helmet>
  );
};

export default Head;
