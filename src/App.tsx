import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Router from "./Routing/Router";
import { history } from "./Routing/history";
import Cookies from "js-cookie";

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_BASE_URL,
});

const authLink = setContext((_, { headers }) => {
	const token = Cookies.get('token')
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : "",
	  }
	}
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={history} />
		</ApolloProvider>		
	);
};

export default App;
