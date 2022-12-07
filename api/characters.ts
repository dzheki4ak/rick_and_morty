import { gql, useQuery } from '@apollo/client';

export const useGetAllCharacters = (page: number) => {
  const getAllCharactersQuery = gql`
    query {
      characters(page: ${page || 1}) {
        results {
          id
          name
          gender
          image
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(getAllCharactersQuery);

  return [loading, error, data];
};

export const useGetCharacter = (id: string) => {
  const getCharacterQuery = gql`
  query {
    character(id: ${id}) {
      name
      gender
      image
      type
    }
  }
  `;
  const { loading, error, data } = useQuery(getCharacterQuery);

  return [loading, error, data];
};
