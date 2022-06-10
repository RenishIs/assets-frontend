import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Router from "./Routing/Router";
import { history } from "./Routing/history";
import boot from "./Helper/boot";

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

boot()
	.then(() => App())
	.catch(err => console.log("ERR BOOTING", err))

export default App;
