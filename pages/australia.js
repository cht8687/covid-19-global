import dynamic from 'next/dynamic';
import Loading from '../components/loading';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('../components/australiaTemplate'),
  {
    loading: () => <Loading />,
    ssr: false,
  },
);

function Australia() {
  return (
    <div>
      <DynamicComponentWithCustomLoading />
    </div>
  );
}

export default Australia;
