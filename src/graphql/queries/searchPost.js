import gql from 'graphql-tag';

const SEARCH_POST = gql`
  query searchPost ($content: String, $offset: Int, $limit: Int) {
    posts(where: { content: { _similar: $content } }, limit: $limit, offset: $offset) {
    like
    share
    content
    comment
    created_at
    }
  }
`;

export default SEARCH_POST;
