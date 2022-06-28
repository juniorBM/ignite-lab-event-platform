import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient(
    {
        uri: 'https://api-sa-east-1.graphcms.com/v2/cl4voqobn1n3c01ue9c7z0r8k/master',
        cache: new InMemoryCache()
    }
)