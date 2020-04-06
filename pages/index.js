import dynamic from 'next/dynamic';
import Loading from '../components/loading';

const DynamicComponentWithCustomLoading = dynamic(() => import('./world'), {
  loading: () => <Loading />,
  ssr: false,
});

function Home() {
  return (
    <div>
      <DynamicComponentWithCustomLoading />
    </div>
  );
}

export default Home;
