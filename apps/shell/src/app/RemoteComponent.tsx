import { lazy, Suspense } from 'react';
import { Loading } from '../components';
import useRemoteModule from '../hooks/useRemoteModule';
import { MicroFrontendProps } from '../types/config';
// import { loadRemote } from '@module-federation/runtime';

const RemoteComponent = ({ scope, ...props }: MicroFrontendProps) => {
  console.log('scope', scope);
  const { loading, error, Component } = useRemoteModule({
    name: scope,
  });

  // // @ts-expect-error working fine
  // const Component = lazy(() => loadRemote(`${scope}/Module`));

  console.log(typeof Component, Component);
  if (loading) {
    return <Loading />;
  }

  if (error || !Component) {
    return <div>No Remote component</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default RemoteComponent;
