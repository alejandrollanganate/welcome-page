import Head from 'next/head'
import ComputerIcon from '../components/ComputerIcon'
import styles from '../styles/Home.module.css'
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Club de software EPN  | Home</title>
        <meta name="description" content="Un espacio creado por desarrolladores para desarrolladores" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <meta content="Aplica aquí" name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.club-software-epn.tech/" />
        <meta property="og:site_name" content="Club de software EPN"/>
        <meta property="og:description" content="Se parte de nuestra comunidad"/>
        <meta property="og:title" content="Club de software EPN" />
        <meta property="og:image" content="https://www.club-software-epn.tech/portada-headers.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@clubSoftwareEpn" />
        <meta name="twitter:title" content="Club de software EPN" />
        <meta name="twitter:description" content="Se parte de nuestra comunidad" />
        <meta name="twitter:image" content="https://www.club-software-epn.tech/portada-headers.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish&family=Prompt:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <hero className={styles.hero}>
          <img className={styles.wordTitle} src='/assets/words.png'/>
          <div className={styles.grid}>
            <h2>Sé parte de nuestra comunidad</h2>
            <a target="_blank" href="https://forms.office.com/r/eULae9Pe5z" className={styles.card}>
              <p>Aplica aquí</p>
            </a>
          </div>
        </hero>
      </main>
      <footer className={styles.footer}>
      <div className={styles.socialContainer}>
        <a href='https://www.facebook.com/club.software.epn' target='_blank'>
          <AiFillFacebook className={styles.socialIcon} fontSize='30px'/>
        </a>

        <a href='https://www.instagram.com/clubsoftwareepn/' target='_blank'>
          <AiFillInstagram  className={styles.socialIcon} fontSize='30px'/>
        </a>

        <a href='https://twitter.com/clubSoftwareEpn' target='_blank'>
          <AiOutlineTwitter className={styles.socialIcon} fontSize='30px'/>
        </a>
      </div>
      <div>
        De<span className={styles.flag}>🇪🇨</span>   con amor 💚  para todo el mundo
      </div>
      </footer>
    </div>
  )
}
