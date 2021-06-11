import styles from '../styles/Home.module.css'

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <img className={styles.clubLogo} src='/assets/logo.svg'/>
      <div>
        <a className={styles.anchorButton} href="https://github.com/Club-de-Software-EPN">Sobre nosotros</a>
      </div>
    </div>
  )
}

export default NavBar;