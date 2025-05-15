import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../utils/Store';

const LeftNav = () => {
  const routes: { [key: string]: string } = {
    home: '/',
    profile: '/profile',
    cart: '/cart',
    checkout: '/checkout',
    orders: '/orders',
    products: '/products',
  };

  const { state, dispatch } = useAppStore();
  const { config, currentModule } = state;
  const navigate = useNavigate();

  if (!config?.leftNavConfig?.length) {
    return null;
  }

  // handle left nav click
  const handleModuleSelect = (key: string, path: string) => {
    dispatch({ type: 'SET_CURRENT_MODULE', payload: key });
    navigate(path);
  };

  return (
    <aside className="p-3 rounded-lg border bg-gray-100 border-blue-300 w-2/12 overflow-hidden h-full sticky top-20 shadow">
      <nav className="mt-4">
        <ul className="text-lg text-blue space-y-2">
          {Object.entries(config.leftNavConfig[0]).map(([key, module]) => (
            <li
              key={key}
              className={`p-2 hover:bg-blue-300 hover:text-white text-xl font-medium rounded-md ${
                key === currentModule && 'bg-blue-300 text-white'
              }`}
              onClick={() => handleModuleSelect(key, routes[key])}
            >
              {module.title}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default LeftNav;
