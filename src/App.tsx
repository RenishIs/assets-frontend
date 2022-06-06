import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Router from './Router'

const BASE_URL = `https://graphql-api0.herokuapp.com/` 

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: BASE_URL,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>		
	);
};

export default App;
