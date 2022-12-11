import { HeaderStyled } from './Header.styles';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

type THeaderProps = {
  error: boolean;
  page?: number;
  loading: boolean;
  setPage: (num: number) => void;
  setName: (num: string) => void;
  setGender: (num: string) => void;
};

export const Header: React.FC<THeaderProps> = ({
  error,
  page,
  setPage,
  loading,
  setName,
  setGender,
}) => {
  const homeClickHandler = () => {
    setPage(1);
    setName('');
    setGender('');
  };

  const nameHandler = () => {
    const charName = prompt(`Enter Character's Name`, 'i.e Morty') || '';
    setName(charName);
  };

  const genderHandler = () => {
    const charGender =
      prompt(`Enter Character's Gender`, 'Male | Female | Unknown') || '';
    setGender(charGender);
  };

  return (
    <HeaderStyled>
      <div className={styles.btnGroup}>
        <button onClick={homeClickHandler} className={styles.button}>
          <Link href="/">Home / Reset</Link>
        </button>
        <button
          onClick={nameHandler}
          className={styles.button}
          disabled={error || loading}
        >
          Filter by name
        </button>
        <button
          onClick={genderHandler}
          className={styles.button}
          disabled={error || loading}
        >
          Filter by Gender
        </button>
      </div>
    </HeaderStyled>
  );
};
