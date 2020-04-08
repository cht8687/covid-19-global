import dynamic from 'next/dynamic';
import Loading from '../components/loading';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/countryHomePage'),
  {
    loading: () => <Loading />,
    ssr: false,
  },
);

function France() {
  return (
    <div>
      <DynamicComponentWithCustomLoading country="france" />
    </div>
  );
}

export default France;
