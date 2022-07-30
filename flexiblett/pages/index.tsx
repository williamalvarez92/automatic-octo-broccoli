import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AvatarDemo from './api/Components/avatar'
import Dropdown from './api/Components/dropdown'
import Hamburger from './api/Components/hamburger'
import styles from '../styles/Home.module.css'
import NavigationMenuDemo from './api/Components/navigation'
import Calendar from './api/Components/calendar'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Broccoli</title>
        <meta name="description" content="Gary and Will number 1 project of broccoli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Flexible Timetable Management</h1>
    <div>
        < AvatarDemo />
      </div>
      <div className={styles.dropdown}>
        <Dropdown />
      </div>
      <div className={styles.hamburgerMenu}>
        <Hamburger />
      </div>
      <div>
        <Calendar />
      </div>
     


      <footer className={styles.footer}>
        <div>
        <NavigationMenuDemo />
      </div>
      </footer>
    </div>
  )
}

export default Home
