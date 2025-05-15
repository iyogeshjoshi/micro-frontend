import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between w-full p-4 border border-blue-400 sticky top-0 bg-blue-400 shadow">
      <div className="text-2xl text-white ml-5">
        <Link to={'/'}>My Org</Link>
      </div>
      <div>
        <span className="text-white text-lg">
          <Link to="/profile">Profile</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
