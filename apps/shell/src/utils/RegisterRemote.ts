import { AppConfig } from '../types/config';
import { registerRemotes } from '@module-federation/enhanced/runtime';

// ['profile', 'http://localhost:4201/'],
// ['products', 'http://localhost:4202/'],
// ['cart', 'http://localhost:4203/'],
// ['checkout', 'http://localhost:4204/'],
// ['orders', 'http://localhost:4205/'],
const _config: AppConfig = {
  headerConfig: [
    {
      clothing: {
        path: '/shopping/clothing',
        title: 'Clothing',
      },
      electronics: {
        path: '/shopping/electronics',
        title: 'Electronics',
      },
      mobiles: {
        path: '/shopping/mobiles',
        title: 'Mobiles',
      },
    },
  ],
  leftNavConfig: [
    {
      profile: {
        path: 'http://localhost:4201/remoteEntry.js',
        title: 'Profile',
      },
      cart: {
        path: 'http://localhost:4203/remoteEntry.js',
        title: 'Cart',
      },
      orders: {
        path: 'http://localhost:4205/remoteEntry.js',
        title: 'Orders',
      },
    },
  ],
  secondaryConfig: [
    {
      checkout: {
        path: 'http://localhost:4204/remoteEntry.js',
        title: 'Checkout',
      },
      payment: {
        path: '/orders/payment',
        title: 'Payment',
      },
    },
  ],
  userPreferences: {
    frequentlyVisited: ['mobiles'],
    theme: 'light',
    layout: 'default',
  },
};

export const RegisterRemote = (config: AppConfig): void => {
  const remotes: any[] = [];
  config = _config;

  Object.entries(config.leftNavConfig[0]).forEach(([key, module]) => {
    const remote = {
      // name: `${key}/${module.title}`,
      name: `${key}`,
      entry: module.path,
    };

    remotes.push(remote);
  });
  Object.entries(config.headerConfig[0]).forEach(([key, module]) => {
    const remote = {
      name: `${key}`,
      entry: module.path,
    };

    remotes.push(remote);
  });
  Object.entries(config.secondaryConfig[0]).forEach(([key, module]) => {
    const remote = {
      name: `${key}`,
      entry: module.path,
    };

    remotes.push(remote);
  });

  registerRemotes(remotes);
};
