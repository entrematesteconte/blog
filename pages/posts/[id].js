import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import utilStyles from '../../styles/articles.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/contact'


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}


export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}



export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>

                <meta property="og:url" content="http://localhost:3000/posts/ejemplo1" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={postData.title} />
                <meta property="og:description" content={postData.description} />
                <meta property="og:image" content={postData.image} />
            </Head>

            <Navbar article></Navbar>
            <article className="container mt-5 mb-5" id="articulos">
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <br />
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}></Date>
                </div>
                <br />
                <div className={utilStyles.headingMd} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <div className={utilStyles.backToHome}>
                    <Link href="/">
                        <a>← Volver a inicio</a>
                    </Link>
                </div>
            </article>


            <Footer id="footer"></Footer>

            <style jsx>{`
                img {
                    width: 100%;
                }
                a {
                    text-decoration: none;
                }
                
            `}</style>
        </>
    )
}