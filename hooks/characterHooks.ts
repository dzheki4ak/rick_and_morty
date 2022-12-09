import { useQuery } from '@apollo/client';
import { getAllCharactersQuery, getCharacterQuery } from '../api/characters';

export const useGetAllCharacters = (page: number) => {
  const { loading, error, data } = useQuery(getAllCharactersQuery, {
    variables: { page },
  });

  return [loading, error, data];
};

export const useGetCharacter = (id: string | undefined) => {
  const { loading, error, data } = useQuery(getCharacterQuery, {
    variables: { id: id },
  });

  return [loading, error, data];
};
