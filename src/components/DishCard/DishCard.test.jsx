import { render, screen } from '@testing-library/react';
import DishCard from './DishCard';

describe('DishCard component', () => {
  const dish = {
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous Greek salad of crisp lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: new URL('../../assets/greek-salad.jpg', import.meta.url).href
  };

  test('renders a DishCard with given data', () => {
    render(<DishCard {...dish} />);

    expect(screen.getByText(dish.name)).toBeInTheDocument();
    expect(screen.getByText(dish.price)).toBeInTheDocument();
    expect(screen.getByText(dish.description)).toBeInTheDocument();

    expect(screen.getByRole('img', { name: dish.name })).toHaveAttribute(
      'src',
      dish.image
    );
  });
});
