import { ApolloProvider } from '@apollo/client'
import 'antd/dist/antd.css'
import { client } from '@Lib/apolloClient'
import { wrapper } from '../state/store/store';
import { Provider } from 'react-redux';
import { useApollo } from '../src/hooks/cadastre';

function MyApp({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const apolloClient = useApollo(props.pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
