import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Registration from "./Components/Registration";
import Login from "./Components/Login";

const BASE_URL = `https://graphql-api0.herokuapp.com/` 

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: BASE_URL,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			{/* <Registration /> */}
			<Login />
		</ApolloProvider>
	);
};

export default App;
