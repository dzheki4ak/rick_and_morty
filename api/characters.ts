import { gql } from '@apollo/client';

export const getAllCharactersQuery = gql`
  query allCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        gender
        image
      }
    }
  }
`;

export const getCharacterQuery = gql`
  query singleCharacter($id: ID!) {
    character(id: $id) {
      name
      gender
      image
      type
    }
  }
`;
