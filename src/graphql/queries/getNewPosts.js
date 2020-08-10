import gql from 'graphql-tag';

const GET_NEW_POSTS = gql`
  query getNewPosts ($limit: Int) {
    comments_aggregate(limit: $limit, order_by: { id: desc }) {
      nodes{
        comment_id
        content
        predict
        created_at
      }
    }
  }
`;

export default GET_NEW_POSTS;
