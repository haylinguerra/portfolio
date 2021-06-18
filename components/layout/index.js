import { useState, useEffect } from 'react' 
import Image from 'next/image'
import styles from '../../styles/Layout.module.scss'
function Layout({children}) {
    const [navBarStateEnable, setNavBarStateEnable] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);
    const handleScroll = function () {
        setScrollPosition(window.pageYOffset)
    }
    const toggleNavState = function() {
        setNavBarStateEnable(!navBarStateEnable)
    }
    return (
        <div className={styles.mainContainer}>
            <header className={scrollPosition < 70 ? styles.startingHeader : ""} onMouseEnter={toggleNavState} onMouseLeave={toggleNavState}>
                <nav
                    className={navBarStateEnable ? styles.enabledBar : ""}>
                    <Image
                        src="/assets/main-logo.svg"
                        alt="Picture of the author"
                        width={60}
                        height={30}
                    />
                </nav>
                <div className={styles.navEnableButton}>
                    <Image
                        src="/assets/nav-bar/down-arrow-icon.svg"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                </div>
            </header>
            {children}
        </div>
    )
}
export default Layout