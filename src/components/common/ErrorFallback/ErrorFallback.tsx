import { useNavigate, Link } from 'react-router';

const ErrorFallback = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-center">
      <div className="mx-auto mt-5 flex w-11/12 max-w-80 flex-col items-center justify-center gap-4 rounded-lg border-2 border-gray-300 p-4 text-center dark:border-gray-600">
        <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
          Something went wrong...
        </h3>
        <button
          type="button"
          className="default-transition inline-block cursor-pointer rounded-md border-2 border-gray-300 px-6 py-2 text-gray-900 outline-none hover:border-gray-500 dark:border-gray-600 dark:text-gray-100 dark:hover:border-gray-400"
          onClick={() => {
            navigate(0);
          }}
        >
          Refresh
        </button>
        <Link
          className="default-transition inline-block text-blue-600 underline decoration-blue-600 underline-offset-1 hover:text-blue-800 hover:decoration-blue-800 dark:text-blue-400 dark:decoration-blue-400 dark:hover:text-blue-200 dark:hover:decoration-blue-200"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorFallback;
