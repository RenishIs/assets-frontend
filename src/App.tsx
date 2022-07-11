import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from "js-cookie";
import { onError } from '@apollo/client/link/error';
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


const logoutLink = onError(( error) => {
	const graphqlErr = error?.graphQLErrors?.[0]
	const notAuthorised = graphqlErr?.extensions?.code == "UNAUTHENTICATED" ? true : false
	if(notAuthorised){
		Cookies.remove('token')
		Cookies.remove('role')
		window.location.reload()
	}
})

export const client = new ApolloClient({
	link: authLink.concat(logoutLink).concat(httpLink),
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
