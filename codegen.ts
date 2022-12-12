import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['api/characters.ts'],
  ignoreNoDocuments: true,
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
