import { render, screen } from '@testing-library/react';
import TestimonialCard from './TestimonialCard';

describe('TestimonialCard component', () => {
  const testimonial = {
    author: 'John Doe',
    avatar: new URL('../../assets/avatar-1.jpeg', import.meta.url).href,
    rating: 5,
    text: 'The modern twist on traditional recipes is delightful! Warm, family atmosphere makes the experience even better.'
  };

  test('renders TestimonialCard with given data', () => {
    render(<TestimonialCard {...testimonial} />);

    expect(screen.getByText(testimonial.author)).toBeInTheDocument();
    expect(screen.getByText(testimonial.text)).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: testimonial.author })
    ).toHaveAttribute('src', testimonial.avatar);
    expect(screen.queryAllByTestId('star').length).toBe(testimonial.rating);
  });
});
