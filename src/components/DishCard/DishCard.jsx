import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

const DishCard = ({ name, description, image, price }) => {
  return (
    <div className="h-116 w-72 overflow-hidden rounded-2xl bg-olive-light">
      <img
        src={image}
        alt={name}
        className="h-48 rounded-2xl hover:scale-105"
      />
      <div className="flex h-20 items-center justify-between px-4">
        <h3 className="text-xl text-olive">{name}</h3>
        <span className="text-lg font-bold text-orange">{price}</span>
      </div>
      <div className="h-32">
        <p className="px-4">{description}</p>
      </div>
      <div className="mt-3 px-4">
        <Button
          text="Order a delivery"
          icon={<FontAwesomeIcon icon={faMotorcycle} />}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default DishCard;
