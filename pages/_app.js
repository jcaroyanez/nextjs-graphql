import { ApolloProvider } from '@apollo/client'
import 'antd/dist/antd.css'
import { client } from '@Lib/apolloClient'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
