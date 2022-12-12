import { useState } from 'react';
import Link from 'next/link';
import { useGetAllCharacters } from '../hooks';
import { HeadComp } from '../components/HeadComp';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Character } from '../components/Character';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState<string | undefined>('');
  const [gender, setGender] = useState<string | undefined>('');

  const { loading, error, data } = useGetAllCharacters(page, name, gender);

  return (
    <div className={styles.container}>
      <HeadComp />
      <Header
        error={error}
        page={page}
        setPage={setPage}
        setName={setName}
        setGender={setGender}
        loading={loading}
      />
      <main className={styles.main}>
        {loading && <h1 style={{ margin: 'auto' }}>Loading...</h1>}
        {error && <h1 style={{ margin: 'auto' }}>{error.message}</h1>}
        {!loading &&
          !error &&
          data &&
          data.characters?.results?.map(char => (
            <Link href={`/characters/${char?.id}`} key={char?.id}>
              <Character
                gender={char?.gender}
                image={char?.image || ''}
                name={char?.name}
              />
            </Link>
          ))}
      </main>
      {!loading && !error && (
        <div className={styles.btnGroup}>
          <button
            className={styles.button}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
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
