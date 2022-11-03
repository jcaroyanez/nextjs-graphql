import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../src/shared/Container/Container'
import List from '@Components/property/List/List'

export default function Home() {
  return (
    <Container>
      <List />
    </Container>
  )
}
