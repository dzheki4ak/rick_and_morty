import { gql } from '@apollo/client';

export const getAllCharactersQuery = gql`
  query allCharacters($page: Int!, $name: String, $gender: String) {
    characters(page: $page, filter: { name: $name, gender: $gender }) {
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
