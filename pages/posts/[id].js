import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import utilStyles from '../../styles/articles.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/contact'
import Router from 'react-router'


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
    console.log(`https://entrematesteconte.vercel.app/posts/${postData.id}`)
    return (
        <>
            <Head>
                <title>{postData.title}</title>

                <meta property="og:url" content={`"https://entrematesteconte.vercel.app/posts/${postData.id}`} /> //Acá usar el url a compartir
                <meta property="og:type" content="article" />
                <meta property="og:title" content={postData.title} />
                <meta property="og:description" content={postData.description} />
                <meta property="og:image" content={`https://github.com/entrematesteconte/blog/blob/main/public${postData.image}?raw=true`} />
            </Head>

            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v12.0"
                nonce="dHW9sZKe"></script>
            <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>


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
                </div><br />

                <div class="fb-share-button" data-href={`https://entrematesteconte.vercel.app/posts/${postData.id}`}
                    data-layout="button_count" data-size="large"><a target="_blank"
                        href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fentrematesteconte.vercel.app%2Fposts%2F${postData.id}&amp;src=sdkpreparse`}
                        class="fb-xfbml-parse-ignore">Compartir</a>
                </div>

                <br />
                <script type="IN/Share" data-url={`https://entrematesteconte.vercel.app/posts/${postData.id}`}></script>
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