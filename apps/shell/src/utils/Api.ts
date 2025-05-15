import axios from 'axios';
import { AppConfig, UserPreferences } from '../types/config';

const API_BASE_URL = 'http://localhost:3100/v1';

// API functions
export const fetchAppConfig = async (): Promise<AppConfig> => {
  try {
    // Get full configuration from API
    const response = await axios.get(`${API_BASE_URL}/config`);
    return response.data;
  } catch (error) {
    console.error('Error fetching app configuration:', error);

    // Fallback to mock data if API is not accessible
    const mockConfig: AppConfig = {
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
            path: '/profile',
            title: 'Profile',
          },
          cart: {
            path: '/cart',
            title: 'Cart',
          },
          orders: {
            path: '/orders',
            title: 'Orders',
          },
        },
      ],
      secondaryConfig: [
        {
          checkout: {
            path: '/cart/checkout',
            title: 'Checkout',
          },
          payment: {
            path: '/orders/payment',
            title: 'Payment',
          },
        },
      ],
      userPreferences: {
        theme: 'light',
        showNotifications: true,
        language: 'en',
        enabledFeatures: [],
        frequentlyVisited: ['mobiles'],
      },
    };

    console.log('Using mock data as fallback');
    return mockConfig;
  }
};

export const updateUserPreferences = async (
  preferences: Partial<UserPreferences>
): Promise<void> => {
  try {
    // Update preferences through API
    await axios.put(`${API_BASE_URL}/preferences`, preferences);
    console.log('User preferences updated successfully');
  } catch (error) {
    console.error('Error updating user preferences:', error);
    throw error;
  }
};

// Get specific section of configuration
export const getConfigSection = async (section: string): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/config/${section}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching config section ${section}:`, error);
    throw error;
  }
};

// Update frequently visited modules
export const updateFrequentlyVisited = async (
  modules: string[]
): Promise<void> => {
  try {
    await updateUserPreferences({ frequentlyVisited: modules });
  } catch (error) {
    console.error('Error updating frequently visited modules:', error);
    throw error;
  }
};
