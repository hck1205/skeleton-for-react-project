import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

import { Provider as UnstatedProvider } from 'unstated';

import App from './pages/App';

import 'assets/styles';

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
});

ReactDOM.render(
  <UnstatedProvider>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </UnstatedProvider>,
  document.getElementById('root')
);
