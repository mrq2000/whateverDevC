import gql from 'graphql-tag';

const GET_COMMENTS = gql`
  query MyQuery ($post_id: String) {
    comments(where: {post_id: {_eq: $post_id}}) {
      comment_id
      content
      predict
      created_at
    }
  }
`;

export default GET_COMMENTS;
