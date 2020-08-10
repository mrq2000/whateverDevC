import gql from 'graphql-tag';

const GET_POSTS = gql`
  query GetTasks {
    posts {
      id
      likes
      content
      comments
    }
  }
`;

export default GET_POSTS;
