import styles from '../styles/components/SiderBar.module.css'
import Link from 'next/link'

export function Sidebar() {
    return(
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <img src="/icons/Logo.svg" alt="Logo"/>
            </div>

            <div className={styles.options}>
                <button type="button">
                    <img src="/icons/House.svg" alt="Desafios"/>
                </button>
            
                <Link href="/Login">Login</Link>
            </div>
        </div>
        
    )
}