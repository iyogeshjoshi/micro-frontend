import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (packageName: string) => {
    if (packageName == 'react') return false;
    if (packageName == 'react-dom') return false;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
