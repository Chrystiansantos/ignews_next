import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="/">
            <time>12 de março de 2021</time>
            <strong>Create a monorepo with lerna & yarn workspace</strong>
            Create a monorepo with lerna yarn workspace. Create a monorepo with
            lerna yarn workspace. Create a monorepo with lerna yarn workspace.
            Create a monorepo with lerna yarn workspace
          </a>
          <a href="/">
            <time>12 de março de 2021</time>
            <strong>Create a monorepo with lerna & yarn workspace</strong>
            Create a monorepo with lerna yarn workspace. Create a monorepo with
            lerna yarn workspace. Create a monorepo with lerna yarn workspace.
            Create a monorepo with lerna yarn workspace
          </a>
          <a href="/">
            <time>12 de março de 2021</time>
            <strong>Create a monorepo with lerna & yarn workspace</strong>
            Create a monorepo with lerna yarn workspace. Create a monorepo with
            lerna yarn workspace. Create a monorepo with lerna yarn workspace.
            Create a monorepo with lerna yarn workspace
          </a>
          <a href="/">
            <time>12 de março de 2021</time>
            <strong>Create a monorepo with lerna & yarn workspace</strong>
            Create a monorepo with lerna yarn workspace. Create a monorepo with
            lerna yarn workspace. Create a monorepo with lerna yarn workspace.
            Create a monorepo with lerna yarn workspace
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    { fetch: ['publication.title', 'publication.content'], pageSize: 100 },
  );
  console.log(response);
  return {
    props: {},
  };
};
