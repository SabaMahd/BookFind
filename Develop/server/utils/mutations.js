import { gql, useMutation } from '@apollo/client';
import SavedBooks from '../../client/src/pages/SavedBooks';

// to add a new user
export const ADD_USER= gql'
    mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            Id
            username
            email
            SavedBooks {
                
            }
        }
    }
}`; 







            // user log in
 export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {    
            Id
            username
            email
            SavedBooks {


            }
        }
    }
}
}`; 