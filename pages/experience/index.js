import { useEffect, useState } from 'react'
import styles from '../../styles/Experience.module.scss'
function about() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, []);
    return (
    <div>
        <div className={`${styles['container']} ${mounted && styles['loaded-container']}`}>
            <div className={`${styles['sp-container']}`}>
                <div>
                    <h1 className="sp-h1">MY EXPERIENCE</h1>
                    <hr />
                    <h4 className="sp-h4">
                        Expertise in front-end development by working on multiple projects and currently working full time as a front-end developer
                    </h4>
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
        </div>
        <div className={`${styles['container']}`}>
            <div className={`${styles['main-project']}`}>
                <h3 className="sp-h3">Front-end Developer at KUKUN</h3>
                <p className="sp-content sp-bold">2019 - Current work</p>
                <p className="sp-content">Working in a home remodeling software development company as a front-end developer using js technologies as webpack, jquery, css preprocessor sass, bootstrap, php, among others</p>
            </div>
            
            <div className={`${styles['sp-container']} ${styles['sp-project-container']}`}>
                <h3 className="sp-h3">Collatio Web application</h3>
                <p className="sp-content sp-bold">Front-end logic UX - UI</p>
                <p className="sp-content">Currently working on a web application for comparing video game prices in real time on a list of different stores by using web scrapping writted on golang</p>
                <p className="sp-content">Technologies:</p>
                <ul>
                    <li>
                        <p className="sp-content">React - framework</p>
                    </li>
                    <li>
                        <p className="sp-content">React router - router</p>
                    </li>
                    <li>
                        <p className="sp-content">Redux - store</p>
                    </li>
                    <li>
                        <p className="sp-content">Redux Sagas - middleware</p>
                    </li>
                    <li>
                        <p className="sp-content">Axios - http library</p>
                    </li>
                    <li>
                        <p className="sp-content">Scss - stylesheet</p>
                    </li>
                </ul>
                <h3 className="sp-h3">Laboratory administration site</h3>
                <p className="sp-content sp-bold">Front-end logic</p>
                <p className="sp-content">Created a CRUD structure for a website that administrates analysis on a different amount of samples organized by clients and dates</p>
                <p className="sp-content">Technologies:</p>
                <ul>
                    <li>
                        <p className="sp-content">Next JS - framework</p>
                    </li>
                    <li>
                        <p className="sp-content">React router - router</p>
                    </li>
                    <li>
                        <p className="sp-content">Axios - http library</p>
                    </li>
                    <li>
                        <p className="sp-content">Scss - modular stylesheet</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default about