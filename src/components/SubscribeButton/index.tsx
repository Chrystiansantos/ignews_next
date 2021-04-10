import { signIn, useSession } from 'next-auth/client';
import { useCallback } from 'react';
import styles from './styles.module.scss';

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const [session] = useSession();

  const handleSubscribe = useCallback(() => {
    if (!session) {
      signIn('github');
    }

    // cria checkout session STRIPE
  }, []);

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now{' '}
    </button>
  );
}
