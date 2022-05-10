import { gql, useQuery } from '@apollo/client';

const GET_Me = gql`
  query Me {
            id
            username
            email
            bookCount
            savedBooks {
                link
                authors
                description
                images
                title
                bookId
            }
        }
    }
`;