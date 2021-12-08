import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import utilStyles from '../../styles/articles.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/contact'
import {
    FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon, LinkedinShareButton, LinkedinIcon
} from 'next-share';

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

                <meta property="og:url" content={`https://www.entrematesteconte.com/posts/${postData.id}`} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={postData.title} />
                <meta property="og:description" content={postData.description} />
                <meta property="og:image" content={`https://github.com/entrematesteconte/blog/blob/main/public${postData.image}?raw=true`} />
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
                </div><br />

                <p><b> Compartilo en tus redes:</b> </p> <br />

                <FacebookShareButton
                    url={`https://www.entrematesteconte.com/posts/${postData.id}`}
                    hashtag={'#entrematesteconte'}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton
                    url={`https://www.entrematesteconte.com/posts/${postData.id}`}
                    title={postData.title}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton url={`https://www.entrematesteconte.com/posts/${postData.id}`}>

                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <WhatsappShareButton
                    url={`https://www.entrematesteconte.com/posts/${postData.id}`}
                    title={postData.title}
                    separator=":: "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
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