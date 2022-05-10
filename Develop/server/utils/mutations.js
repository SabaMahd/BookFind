import { gql, useMutation } from '@apollo/client';

// to add a new user
export const ADD_USER= gql'
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {