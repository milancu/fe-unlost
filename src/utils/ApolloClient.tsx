import {ApolloClient, InMemoryCache} from '@apollo/client';

let token;

if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token')
}

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    headers: {
        Authorization: `Bearer ${token}`
    },
    cache: new InMemoryCache(),
});

export default client;