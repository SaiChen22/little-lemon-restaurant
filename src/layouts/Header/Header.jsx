import '@uiw/github-corners';
import { NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import pageList from '../../utils/pageList';

const Header = () => {
  return (
    <header className="flex h-24 justify-center">
      <div className="flex w-256 items-center justify-between">
        <img
          src={logoImage}
          alt="Little Lemon logo"
          className="h-12"
          data-testid="header-logo"
        />
        <nav>
          <ul className="flex justify-between gap-x-8">
            {pageList.map(({ id, name, path }) => (
              <li key={id} className="text-xl">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'text-yellow' : '"hover:text-yellow"'
                  }
                  data-testid={id}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <github-corners
        position="absolute"
        width={64}
        height={64}
        href="https://github.com/SaiChen22/little-lemon-restaurant"
        target="_blank"
      />
    </header>
  );
};

export default Header;
