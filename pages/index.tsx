import { TCharacter } from './types';
import styles from '../styles/Home.module.scss';
import { useGetAllCharacters } from '../api/characters';
import { HeadComp } from '../components/HeadComp';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Character } from '../components/Character';
import { useState } from 'react';

const Home = () => {
  const [page, setPage] = useState(1);
  const [loading, error, data] = useGetAllCharacters(page);

  const characters: TCharacter[] = data?.characters.results;

  return (
    <div className={styles.container}>
      <HeadComp />
      <Header error={error} page={page} setPage={setPage} loading={loading} />
      <main className={styles.main}>
        {loading && <h1 style={{ margin: 'auto' }}>Loading...</h1>}
        {error && <h1 style={{ margin: 'auto' }}>{error.message}</h1>}
        {!loading &&
          !error &&
          characters.map(char => (
            <Character key={char.id} gender={char.gender} image={char.image} name={char.name} />
          ))}
      </main>
      {!loading && !error && (
        <div className={styles.btnGroup}>
          <button className={styles.button} onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous Page
          </button>
          <button className={styles.button} onClick={() => setPage(page + 1)}>
            Next Page
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
