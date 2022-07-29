import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AvatarDemo from './api/Components/avatar'
import Dropdown from './api/Components/dropdown'
import Hamburger from './api/Components/hamburger'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Broccoli</title>
        <meta name="description" content="Gary and Will number 1 project of broccoli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Gary and Will phat project</h1>
    <div>
        < AvatarDemo />
      </div>
      <div>
        <Dropdown />
      </div>
      <div>
        <Hamburger />
      </div>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
