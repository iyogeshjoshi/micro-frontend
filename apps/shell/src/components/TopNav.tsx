import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../utils/Store';

const TopNav = () => {
  const { state, dispatch } = useAppStore();
  const navigate = useNavigate();
  const { config } = state;

  if (!config?.headerConfig.length) {
    return null;
  }

  const handleNavSelect = (key: string, path: string) => {
    dispatch({ type: 'SET_CURRENT_MODULE', payload: key });
    navigate(path);
  };

  return (
    <section className="flex flex-1 flex-row w-full space-x-1 mx-auto">
      {Object.entries(config?.headerConfig[0]).map(([key, module]) => (
        <div
          key={key}
          className="p-2 px-4 bg-blue-400 rounded-md text-lg text-white cursor-pointer"
          onClick={() => handleNavSelect(key, module.path)}
        >
          {module.title}
        </div>
      ))}
    </section>
  );
};

export default TopNav;
