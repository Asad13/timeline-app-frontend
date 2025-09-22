import { Link } from 'react-router';
import Head from '@/components/common/Head';

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <div>
        <h1 className="py-2 text-center text-5xl font-bold">Home</h1>
        <div>
          <ul>
            <li>
              <Link to="/timelines">Timelines</Link>
            </li>
            <li>
              <Link to="/timelines/create">Create Timeline</Link>
            </li>
            <li>
              <Link to="/timelines/1">Timeline 1</Link>
            </li>
            <li>
              <Link to="/timelines/1/edit">Timelines 1 - Edit</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
