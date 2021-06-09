/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import { SignInButton } from '.';

jest.mock('next-auth/client');

describe('SignIn Button component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false]);
    render(<SignInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });
  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: 'Fulano', email: 'fulano@gmail.com' },
        expires: 'fake-expires',
      },
      false,
    ]);

    render(<SignInButton />);
    expect(screen.getByText('Fulano')).toBeInTheDocument();
  });
});
