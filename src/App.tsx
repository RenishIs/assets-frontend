import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Router from "./Routing/Router";
import { history } from "./Routing/history";

const BASE_URL = `https://graphql-api0.herokuapp.com/` 

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: BASE_URL,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={history} />
		</ApolloProvider>		
	);
};

export default App;
