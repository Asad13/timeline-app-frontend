import Head from '@/components/common/Head';
import Spinner from '@/components/ui/Spinner';
import useSystemTheme from '@/core/hooks/useSystemTheme';

type LoaderProps = {
  fullPage?: boolean;
  title?: string;
};

const Loader = ({ fullPage = true, title }: LoaderProps) => {
  const theme = useSystemTheme();
  const color = theme === 'dark' ? '#212121' : '#ffffff';

  return (
    <>
      {title !== undefined && <Head title={title} />}
      <div className={`${!fullPage ? 'not-full-page' : ''}`}>
        <div className={`loader-container ${fullPage ? 'full-page' : ''}`}>
          <Spinner size={48} stroke={6} color={color} />
        </div>
      </div>
    </>
  );
};

export default Loader;
