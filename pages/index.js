import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
const detectSection = function(options) {
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)
  const [ mounted, setMounted ] = useState(false)
  const callbackFunction = entries => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }
  useEffect(() => {
    setMounted(true)
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options]);
  return [containerRef, options]
}
export default function Home() {
  const [containerRef, isVisible] = detectSection({
    root: null,
    threshold: 0
  })
  const scrollToNextSection = (e) => {
    window.scrollTo({
      top: (window.scrollY + window.innerHeight),
      behavior: 'smooth',
    })
  }
  return (
    <div className={`${styles['header-container']} ${styles['loaded_container']}`}>
      <div className={styles.header_content}>
        <div className={styles.header_content_wrapper}>
          <h1 className="sp-h1 sp-text-left">WELCOME TO MY PROFILE<br/></h1>
        </div>
        {/* <p className={`sp-link ${styles['next-section-button']}`} onClick={scrollToNextSection}>This way!</p> */}
      </div>
      <div className={`${styles['container']}`} ref={containerRef} id="home-address-section">
        <div className={`${styles['sp-container']}`} >
          <h2 className="sp-h2 sp-text-center">Let me guide you</h2>
          <p className="sp-content sp-text-center">This website was generated using static site rendering with NextJS, here you will find separated by sections all the information you need about my skills and experience</p>
          <div className={`${styles['recomendation-box-wrapper']}`}>
            <Link href="/about-me">
            <a className={`${styles['recomendation-box']}`}>
              <div className={`${styles['recommendation-box-content']}`}>
                <h6 className="sp-h6">About me</h6>
                <p className="sp-content">Find out about my personal information</p>
              </div>
            </a>
            </Link>
            <Link href="/experience">
            <a className={`${styles['recomendation-box']}`}>
              <div className={`${styles['recommendation-box-content']}`}>
                <h6 className="sp-h6">Experience</h6>
                <p className="sp-content">See what is my experience and projects</p>
              </div>
            </a>
            </Link>
            <Link href="/contact-me">
            <a className={`${styles['recomendation-box']}`}>
              <div className={`${styles['recommendation-box-content']}`}>
                <h6 className="sp-h6">Contact me</h6>
                <p className="sp-content">Find about which way suits you the best for contacting me</p>
              </div>
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}