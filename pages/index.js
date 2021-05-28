import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
        <meta property="og:site_name" content="Club de software EPN"/>
        <meta property="og:description" content="Se parte de nuestra comunidad"/>
        <meta property="og:title" content="Club de software EPN" />
        <meta property="og:image" content="https://www.epn.edu.ec/wp-content/uploads/2010/09/DSC00179.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@clubSoftwareEpn" />
        <meta name="twitter:title" content="Club de software EPN" />
        <meta name="twitter:description" content="Se parte de nuestra comunidad" />
        <meta name="twitter:image" content="https://www.epn.edu.ec/wp-content/uploads/2010/09/DSC00179.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Club de Software EPN
        </h1>

        <p className={styles.description}>
          Bienvenido
        </p>

        <div className={styles.grid}>
          <a href="https://forms.office.com/r/eULae9Pe5z" className={styles.card}>
            <h2>Sé parte de nuestra comunidad</h2>
            <p>Aplica aquí</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      From<span className={styles.flag}>🇪🇨</span>with love 💚
      </footer>
    </div>
  )
}
