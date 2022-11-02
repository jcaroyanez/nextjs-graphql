import { ApolloProvider } from '@apollo/client'
import 'antd/dist/antd.css'
import { client } from '@Lib/apolloClient'
import { Provider } from 'react-redux'
import store from '../state/store/store'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider> 
    </ApolloProvider>
  )
}

export default MyApp
