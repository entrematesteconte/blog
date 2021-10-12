import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar({ home, article }) {
    return (
        <>
            {home ? (
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src="/images/logo_horizontal_72ppp.png" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" className={styles.navitem}>
                                    <Link href="">
                                        <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
                                    </Link>
                                </li>
                                <li className="nav-item" className={styles.navitem}>
                                    <a className="nav-link" href="#articulos">Artículos</a>
                                </li>
                                <li className="nav-item" className={styles.navitem}>
                                    <Link href="/about">
                                        <a className="nav-link" href="">About</a>
                                    </Link>
                                </li>
                                <li className="nav-item" className={styles.navitem}>
                                    <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            ) : article ? (
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand" href=""><img src="/images/logo_horizontal_72ppp.png" /></a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" className={styles.navitem}>
                                    <Link href="/">
                                        <a className="nav-link active" aria-current="page" href="">Inicio</a>
                                    </Link>
                                </li>
                                {/* <li className="nav-item" className={styles.navitem}>
                                    <a className="nav-link" href="#">Artículos</a>
                                </li> */}
                                <li className="nav-item" className={styles.navitem}>
                                    <Link href="/about">
                                        <a className="nav-link" href="">About</a>
                                    </Link>
                                </li>
                                <li className="nav-item" className={styles.navitem}>
                                    <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            ) : (
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand" href=""><img src="/images/logo_horizontal_72ppp.png" /></a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" className={styles.navitem}>
                                    <Link href="/">
                                        <a className="nav-link active" aria-current="page" href="">Inicio</a>
                                    </Link>
                                </li>
                                <li className="nav-item" className={styles.navitem}>
                                    <Link href="/">
                                        <a className="nav-link" href="">Artículos</a>
                                    </Link>
                                </li>
                                {/* <li className="nav-item" className={styles.navitem}>
                                    <Link href="/about">
                                    <a className="nav-link" href="">About</a>
                                    </Link>
                                </li> */}
                                <li className="nav-item" className={styles.navitem}>
                                    <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
            }
            <style jsx>{`
            .navbar-brand img {
                height: 6vh;
            }
            `}</style>
        </>
    )
}