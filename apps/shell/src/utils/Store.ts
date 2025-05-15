import React, { createContext, useContext } from 'react';
import { AppConfig } from '../types/config';

// Define store state
interface AppState {
  config: AppConfig | null;
  currentModule: string | null;
  loading: boolean;
  error: Error | null;
}

// Define store action
type Action =
  | { type: 'SET_CONFIG'; payload: AppConfig }
  | { type: 'SET_CURRENT_MODULE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: Error | null };

// Initial state
export const initialState: AppState = {
  config: null,
  currentModule: null,
  loading: false,
  error: null,
};

// Reducer function
export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        config: action.payload,
      };
    case 'SET_CURRENT_MODULE':
      return {
        ...state,
        currentModule: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

// Store context
interface AppStoreContextProps {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export const AppStoreContext = createContext<AppStoreContextProps>({
  state: initialState,
  dispatch: () => null,
});

// Custom hook to use the Store
export const useAppStore = () => useContext(AppStoreContext);
