import { HeaderStyled } from './Header.styles';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

type THeaderProps = {
  error: boolean;
  page?: number;
  loading: boolean;
  setPage: (num: number) => void;
};

export const Header: React.FC<THeaderProps> = ({ error, page, setPage, loading }) => {
  const homeClickHandler = () => {
    setPage(1);
  };

  return (
    <HeaderStyled>
      <div className={styles.btnGroup}>
        <button onClick={homeClickHandler} className={styles.button} disabled={error || page === 1}>
          <Link href='/'>Home</Link>
        </button>
        <button className={styles.button} disabled={error || loading}>
          Sort by name
        </button>
      </div>
    </HeaderStyled>
  );
};
