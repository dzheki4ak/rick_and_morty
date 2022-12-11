import { useRouter } from 'next/router';
import Link from 'next/link';
import { CardContent, Button, CardMedia, Typography } from '@mui/material';
import { HeadComp } from '../../components/HeadComp';
import { useGetCharacter } from '../../hooks';
import { CardStyled } from './Character.styles';
import styles from '../../styles/Home.module.scss';

const CharacterFull = () => {
  const {
    query: { id },
  } = useRouter();
  const [loading, error, data] = useGetCharacter(id?.toString());

  return (
    <div className={styles.container}>
      <HeadComp />
      <main className={styles.main}>
        {loading && <h1 style={{ margin: 'auto' }}>Loading...</h1>}
        {error && <h1 style={{ margin: 'auto' }}>{error.message}</h1>}
        {!loading && !error && (
          <CardStyled>
            <CardMedia
              component="img"
              image={data.character.image}
              alt={data.character.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.character.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.character.gender}
              </Typography>
            </CardContent>
            <Link href="/">
              <Button>Home</Button>
            </Link>
          </CardStyled>
        )}
      </main>
    </div>
  );
};

export default CharacterFull;
