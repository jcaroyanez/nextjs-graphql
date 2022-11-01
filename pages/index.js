import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../src/shared/Container/Container'
import List from '@Components/List/List'
import { wrapper } from '../state/store/store'
import { creatorSetProperties } from '../state/action/actions'
import { client, initializeApollo } from '@Lib/apolloClient'
import { GET_ALL_CADASTRE } from '@Definitions/constant/cadastre-query'
import { gql } from '@apollo/client'

const Home = () => {
  return (
    <Container>
      <List />
    </Container>
  )
}

Home.getInitialProps = wrapper.getInitialPageProps(store => async() => {
  try {
    const apolloClient = initializeApollo();
    const { data } = await apolloClient.query({
      query: GET_ALL_CADASTRE
    })
    console.log({data});
  } catch (error) {
      console.error({error})
  }
  store.dispatch(creatorSetProperties())
})

export default Home;