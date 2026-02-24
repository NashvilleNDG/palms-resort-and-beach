import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewsletterForm } from '@/components/NewsletterForm';

describe('NewsletterForm', () => {
  it('renders name and email inputs and subscribe button', () => {
    render(<NewsletterForm />);
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument();
    expect(screen.getByRole('form', { name: /Newsletter signup/i })).toBeInTheDocument();
  });

  it('shows Subscribing… when submit is clicked', async () => {
    const user = userEvent.setup();
    let resolvePromise: (value: Response) => void;
    const pendingPromise = new Promise<Response>((resolve) => {
      resolvePromise = resolve;
    });
    const fetchMock = jest.spyOn(globalThis, 'fetch').mockImplementation(
      () =>
        pendingPromise as Promise<Response>
    );
    render(<NewsletterForm />);
    await user.type(screen.getByPlaceholderText('Full name'), 'Jane Doe');
    await user.type(screen.getByPlaceholderText('Your email'), 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /Subscribe/i }));
    expect(screen.getByRole('button', { name: /Subscribing…/i })).toBeInTheDocument();
    resolvePromise!({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    } as Response);
    await pendingPromise;
    fetchMock.mockRestore();
  });

  it('shows success message after successful submission', async () => {
    const user = userEvent.setup();
    jest.spyOn(globalThis, 'fetch').mockImplementation(
      () =>
        new Promise((resolve) =>
          resolve({
            ok: true,
            json: () => Promise.resolve({ success: true }),
          } as Response)
        )
    );
    render(<NewsletterForm />);
    await user.type(screen.getByPlaceholderText('Full name'), 'Jane Doe');
    await user.type(screen.getByPlaceholderText('Your email'), 'jane@example.com');
    await user.click(screen.getByRole('button', { name: /Subscribe/i }));
    expect(await screen.findByText(/Thanks for subscribing!/i)).toBeInTheDocument();
  });
});
