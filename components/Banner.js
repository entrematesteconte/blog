import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner() {
    return (
            <>  
                <div className={styles.hero}>
                    <div className={styles.text}>
                        <h1>Entre mates te conté</h1>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consectetur!</p> */}
                    </div>
                </div>
            </>
    )
}