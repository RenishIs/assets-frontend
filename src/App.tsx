import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Registration from "./Components/Registration";

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://127.0.0.1:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <Registration />;
    </ApolloProvider>
  );
};

export default App;
