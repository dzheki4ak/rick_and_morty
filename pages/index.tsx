import { TCharacter } from './types';
import styles from '../styles/Home.module.scss';
import { useGetAllCharacters } from '../api/characters';
import { HeadComp } from '../components/HeadComp';
import { Footer } from '../components/Footer';
import { Character } from '../components/Character';
import { useState } from 'react';

const Home = () => {
  const [page, setPage] = useState(1);
  const [loading, error, data] = useGetAllCharacters(page);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  const characters: TCharacter[] = data?.characters.results;

  return (
    <div className={styles.container}>
      <HeadComp />
      <main className={styles.main}>
        {characters.map(char => (
          <Character key={char.id} gender={char.gender} image={char.image} name={char.name} />
        ))}
      </main>
      <div>
        <button onClick={() => setPage(prev => prev - 1)}> - </button>
        <button onClick={() => setPage(prev => prev + 1)}> + </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
