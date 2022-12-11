import { useQuery } from '@apollo/client';
import { getAllCharactersQuery, getCharacterQuery } from '../api/characters';

export const useGetAllCharacters = (
  page: number,
  name?: string,
  gender?: string,
) => {
  const { loading, error, data } = useQuery(getAllCharactersQuery, {
    variables: { page, name, gender },
  });

  return [loading, error, data];
};

export const useGetCharacter = (id: string | undefined) => {
  const { loading, error, data } = useQuery(getCharacterQuery, {
    variables: { id },
  });

  return [loading, error, data];
};
