import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { Character } from './types';
import styles from '../styles/Home.module.scss';
import { GET_CHARACTERS } from '../api/characters';

const Home = () => {

  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return (<h1>Loading...</h1>)
  }
  if (error) {
    return (<h1>{error.message}</h1>)
  }

  const characters: Character[] = data?.characters.results

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty Characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {characters.map(char => <li key={char.id}>{char.name}</li>)}
        </ul>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
