import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logoWhiteImage from '../../assets/logo-white.png';
import pageList from '../../utils/pageList';

const socials = [
  {
    icon: faFacebook,
    name: 'Facebook',
    url: 'https://www.facebook.com/'
  },
  {
    icon: faInstagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/'
  },
  {
    icon: faTwitter,
    name: 'X (Twitter)',
    url: 'https://twitter.com/'
  }
];

const Footer = () => {
  return (
    <footer className="flex h-72 justify-center bg-olive">
      <div className="flex w-256 items-center justify-between">
        <div className="h-48">
          <img src={logoWhiteImage} alt="Little Lemon logo" className="w-24" />
        </div>
        <nav className="h-48">
          <h3 className="text-xl uppercase text-white">Sitemap</h3>
          <ul className="mt-3 text-gray">
            {pageList.map(({ id, name, path }) => (
              <li key={id} className="hover:text-white">
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-48">
          <h3 className="text-xl uppercase text-white">Contact us</h3>
          <div className="mt-3 flex flex-col gap-y-2 text-gray">
            <address>
              <span className="inline-block w-7">
                <FontAwesomeIcon icon={faLocationDot} size="lg" />
              </span>
              <span>678 Pisa Ave Chicago, IL 60611</span>
            </address>
            <p className="hover:text-white">
              <a href="tel:+13125932744">
                <span className="inline-block w-7">
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </span>
                <span>(312) 593-2744</span>
              </a>
            </p>
            <p className="hover:text-white">
              <a href="mailto:support@littlelemon.com">
                <span className="inline-block w-7">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </span>
                <span>support@littlelemon.com</span>
              </a>
            </p>
          </div>
        </div>
        <div className="h-48">
          <h3 className="text-xl uppercase text-white">Follow us</h3>
          <ul className="mt-3 flex flex-col gap-y-2 text-gray">
            {socials.map(({ icon, name, url }) => (
              <li key={name} className="hover:text-white">
                <a href={url} target="_blank" rel="noreferrer">
                  <span className="inline-block w-7">
                    <FontAwesomeIcon icon={icon} size="lg" />
                  </span>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
