import {ApolloClient, InMemoryCache} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';


let token;

if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token')
}

const client = new ApolloClient({
    link: createUploadLink({
        uri: 'http://localhost:8080/graphql',
        headers: {
            Authorization: `Bearer ${token}`
        },
    }),
    cache: new InMemoryCache(),
});

const httpLink = createUploadLink({uri: `http://localhost:8080/graphql`});

export default client;