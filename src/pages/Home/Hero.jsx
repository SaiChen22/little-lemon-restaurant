import { useNavigate } from 'react-router-dom';
import restaurantChefImage from '../../assets/restaurant-chef.jpg';
import Button from '../../components/Button/Button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex h-96 justify-center bg-olive">
      <div className="flex w-256 items-center justify-center gap-x-8">
        <div>
          <h1 className="font-serif text-5.5xl leading-tight text-yellow">
            Little Lemon
          </h1>
          <h2 className="font-serif text-4.5xl text-white">Chicago</h2>
          <p className="mt-2 text-lg text-white">
            We are Little Lemon, a family-owned and operated restaurant that
            takes pride in bringing the authentic flavors of the Mediterranean
            to our local community.
          </p>
          <div className="mt-6">
            <Button
              text="Reserve a table"
              onClick={() => {
                navigate('/table-reservation');
              }}
              data-testid="reserve"
            />
          </div>
        </div>
        <div className="relative w-90 flex-none">
          <img
            src={restaurantChefImage}
            alt="Little Lemon chef and food"
            className="relative top-16 rounded-2xl object-cover"
            data-testid="hero-illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
