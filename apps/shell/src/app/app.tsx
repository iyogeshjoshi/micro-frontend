import { Suspense, useEffect, useReducer } from 'react';
import '../styles.css';
import Router from './Router';
import LeftNav from '../components/LeftNav';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AppStoreContext, initialState, reducer } from '../utils/Store';
import { fetchAppConfig } from '../utils/Api';
import { TopNav } from '../components';
import { RegisterRemote } from '../utils/RegisterRemote';
// import { init } from '@module-federation/enhanced/runtime';

// init({
//   name: 'shell',
//   remotes: [],
// });

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadConfig = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        const config = await fetchAppConfig();
        // console.log(config);
        RegisterRemote(config);

        dispatch({ type: 'SET_CONFIG', payload: config });
        // set a default module is none is selected
        if (
          !state.currentModule &&
          config.leftNavConfig &&
          config.leftNavConfig.length
        ) {
          const firstLeftNavModule = Object.keys(config.leftNavConfig[0])[0];
          dispatch({ type: 'SET_CURRENT_MODULE', payload: firstLeftNavModule });
        }
      } catch (error) {
        dispatch({
          type: 'SET_ERROR',
          payload:
            error instanceof Error ? error : new Error('Failed to load config'),
        });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadConfig();
  }, []);

  return (
    <AppStoreContext.Provider value={{ state, dispatch }}>
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="flex flex-1 p-9">
          <LeftNav />
          <div className="container">
            <TopNav />
            <Suspense fallback={<Loading />}>
              <Router />
            </Suspense>
          </div>
        </div>
      </div>
    </AppStoreContext.Provider>
  );
}

export default App;
