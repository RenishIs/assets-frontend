import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Router from "./Routing/Router";
import { history } from "./Routing/history";

// import boot from "./Helper/boot";

const httpLink = createHttpLink({
	uri: process.env.REACT_APP_BASE_URL,
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('auth_token');
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

// boot()
// 	.then(() => App())
// 	.catch(err => console.log("ERR BOOTING", err))

export default App;
