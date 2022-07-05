import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from "js-cookie";
import Routes from './Routing'

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
			<Routes />
		</ApolloProvider>		
	);
};

export default App;
