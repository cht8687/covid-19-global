import dynamic from 'next/dynamic';
import Loading from '../components/loading';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/countryHomePage'),
  {
    loading: () => <Loading />,
    ssr: false,
  },
);

function Canada() {
  return (
    <div>
      <DynamicComponentWithCustomLoading country="canada" />
    </div>
  );
}

export default Canada;
