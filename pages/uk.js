import dynamic from 'next/dynamic';
import Loading from '../components/loading';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/countryHomePage'),
  {
    loading: () => <Loading />,
    ssr: false,
  },
);

function Uk() {
  return (
    <div>
      <DynamicComponentWithCustomLoading country="uk" />
    </div>
  );
}

export default Uk;
