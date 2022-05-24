import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Registration from "./Components/Registration";

const App = () => {
  const BASE_URL = process.env.REACT_APP_API   

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: BASE_URL,
  });

  return (
    <ApolloProvider client={client}>
      <Registration />;
    </ApolloProvider>
  );
};

export default App;
