import { useEffect, useState } from 'react'
import styles from '../../styles/About.module.scss'
function about() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, []);
    return (
    <div className={`${styles['container']} ${mounted && styles['loaded-container']}`}>
        <div className={`${styles['sp-container']}`}>
            <div>
                <h1 className="sp-h1">ABOUT ME</h1>
                <hr />
                <h4 className="sp-h4">
                    Hello, my name is Angel and I am an experienced web developer. 
                </h4>
                <p className="sp-content">Experienced and talented</p>
                <p className="sp-content">Years of self-taught programming lessons, engaged with providing the best of the services a programmer can offer on any branch of web development. I can say that after years of working in web development I love what I do and it's directly reflected on the product I deliver.</p>
                <p className="sp-content">Never stop learning. Always keeping up track of the updates in the technologies I implement is key in the working with long term usage on the product</p>
                <p className="sp-content">Certified skills and experience</p>
            </div>
        </div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
        <div class={`${styles['background-dot']}`}></div>
    </div>
    )
}
export default about