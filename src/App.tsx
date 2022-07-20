import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from "js-cookie";
import { onError } from '@apollo/client/link/error';
import Routes from './Routing'
import firebase from 'firebase/compat/app';

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


const logoutLink = onError((error) => {
	const graphqlErr = error?.graphQLErrors?.[0]
	const notAuthorised = graphqlErr?.extensions?.code == "UNAUTHENTICATED" ? true : false
	if (notAuthorised) {
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
	var config = {
		apiKey: process.env.REACT_APP_API_KEY,
		// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		//projectId: process.env.REACT_APP_PROJECT_ID,
		//storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		//messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		//appId: process.env.REACT_APP_APP_ID,
		//measurementId: process.env.REACT_APP_MEASUREMENT_ID
	};

	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}
	return (
		<ApolloProvider client={client}>
			<Routes />
		</ApolloProvider>
	);
};

export default App;
