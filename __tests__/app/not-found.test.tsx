import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';

describe('NotFound (404)', () => {
  it('renders 404 heading and message', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/This page doesn't exist or has been moved/i)
    ).toBeInTheDocument();
  });

  it('renders Back to Home link pointing to /', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Back to Home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
