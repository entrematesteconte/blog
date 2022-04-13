import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '/components/Navbar'
import Footer from '/components/contact'


export default function about() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navbar></Navbar>
            <div className="container">
                <h2>Franco Sotelo, Ing. Agrónomo</h2><br />
                <div className="row">
                    <div className="col-md">
                        <Image src="/images/quien-soy-cut.jpeg" width={512} height={683} className="border-radius"></Image>
                    </div>
                    <div className="col-md">
                        <h2>Sobre mi</h2><br />
                        <p>Soy Franco Sotelo, recientemente graduado de la Facultad de Agronomía. Cree “Entre mates te conté” pensando en la posibilidad de generar un intercambio dinámico entre protagonistas del agro, sus principales formas de innovar, y ustedes nuestros lectores.</p>
                        <p>En una época donde la tecnología toma cada vez más terreno y donde la pandemia nos hace cada día un poco más amigos de ella;  “Entre mates te conté” es un espacio virtual en el cual se compartirán artículos, entrevistas y valiosos intercambios. </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <style jsx>{`
                h1 {
                    text-align: start;
                }

                @media (max-width: 600px) {
                    
                }
            `}
            </style>
        </>
    )
}