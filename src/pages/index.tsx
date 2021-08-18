import Head from 'next/head'
import Image from 'next/image'

import Card from '../components/Card';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>My Next Spinners</title>
        <meta name="description" content="Spinner Galery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Card></Card>
      </div>
    </div>
  )
}
