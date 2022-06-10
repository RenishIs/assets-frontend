import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Router from "./Routing/Router";
import { history } from "./Routing/history";

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: process.env.REACT_APP_BASE_URL,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={history}/>
		</ApolloProvider>		
	);
};

export default App;
