import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { useCallback } from 'react';
import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface ISubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  const [session] = useSession();
  const router = useRouter();

  const handleSubscribe = useCallback(async () => {
    if (!session) {
      signIn('github');
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const { data } = await api.post('/subscribe');

      const { sessionId } = data;
      const stripe = await getStripeJS();
      await stripe.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      console.log(error);
    }
  }, [session]);

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
