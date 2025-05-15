import { lazy, Suspense } from 'react';
import { Loading } from '../components';
import useRemoteModule from '../hooks/useRemoteModule';
import { MicroFrontendProps } from '../types/config';
import { loadRemote } from '@module-federation/runtime';

const RemoteComponent = ({ scope, ...props }: MicroFrontendProps) => {
  // const { loading, error, Component } = useRemoteModule({
  //   name: scope,
  // });
  // const Component: React.ComponentType<any> = lazy(() =>
  //   loadRemote<React.ComponentType<any>>(`${scope}/Module`)
  // );
  // @ts-expect-error working fine
  const Component = lazy(() => loadRemote(`${scope}/Module`));

  console.log(typeof Component, JSON.stringify(Component, null, 2));
  // if (loading) {
  //   return <Loading />;
  // }

  if (!Component) {
    return <div>No Remote component</div>;
  }

  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export default RemoteComponent;
