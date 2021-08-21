import Head from 'next/head'
import Image from 'next/image'

import Card from '../components/Card';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>My Next Spinners</title>
        <meta name="description" content="Spinner Galery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home__content">
        <Header></Header>
        <div className="container">
          
          <Card></Card>
        </div>

      </div>
    </div>
  )
}
