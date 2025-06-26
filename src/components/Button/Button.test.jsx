import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders a Button with correct text', () => {
    const text = 'Reserve a table';
    render(<Button text={text} onClick={() => {}} />);
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
  });

  test('renders an icon Button with correct classes', () => {
    const text = 'Order a delivery';
    render(
      <Button text={text} icon={<FontAwesomeIcon icon={faMotorcycle} />} />
    );
    expect(screen.getByRole('button', { name: text })).toHaveClass(
      'border-none'
    );
  });

  test('renders disabled Button with correct state and classes', () => {
    const text = 'Reserve now';
    render(<Button text={text} type="submit" disabled />);
    expect(screen.getByRole('button', { name: text })).toBeDisabled();
    expect(screen.getByRole('button', { name: text })).toHaveClass(
      'bg-olive-light'
    );
  });

  test('calls correct function on click', () => {
    const text = 'Reserve now';
    const handleClick = vi.fn();
    render(<Button text={text} type="submit" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: text }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
