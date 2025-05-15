/**
 * In a real application, this would be stored in a database
 * For this demo, we're using an in-memory data store
 */

// Mock config data that matches our frontend structure
const configData = {
  headerConfig: [
    {
      clothing: {
        path: "http://localhost:4202/remoteEntry.js",
        title: "Clothing",
      },
      electronics: {
        path: "http://localhost:4202/remoteEntry.js",
        title: "Electronics",
      },
      mobiles: {
        path: "http://localhost:4202/remoteEntry.js",
        title: "Mobiles",
      },
    },
  ],
  leftNavConfig: [
    {
      profile: {
        path: "http://localhost:4201/remoteEntry.js",
        title: "Profile",
      },
      cart: {
        path: "http://localhost:4203/remoteEntry.js",
        title: "Cart",
      },
      orders: {
        path: "http://localhost:4205/remoteEntry.js",
        title: "Orders",
      },
      products: {
        path: "http://localhost:4202/remoteEntry.js",
        title: "Products",
      },
    },
  ],
  secondaryConfig: [
    {
      checkout: {
        path: "http://localhost:4204/remoteEntry.js",
        title: "Checkout",
      },
      payment: {
        path: "http://localhost:4204/remoteEntry.js",
        title: "Payment",
      },
    },
  ],
};

// Method to get the full config
const getConfig = () => {
  return { ...configData };
};

// Method to get a specific part of the config
const getConfigSection = (section) => {
  if (configData[section]) {
    return configData[section];
  }
  return null;
};

// Method to update a specific part of the config (in a real app, this would update the database)
const updateConfigSection = (section, data) => {
  if (configData[section]) {
    configData[section] = data;
    return true;
  }
  return false;
};

module.exports = {
  getConfig,
  getConfigSection,
  updateConfigSection,
};
