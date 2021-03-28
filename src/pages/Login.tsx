import Link from 'next/link'
import styles from '../styles/pages/PageLogin.module.css'

export default function Login(){
    return(
        <body>
            
            <div className={styles.container}>
                
                <div>
                    <header>
                        <img src="/icons/logo-Login.svg" alt="Logo"/>
                    </header>
                    
                    <main>
                        <h2>Bem-Vindo</h2>

                        <p>
                            Faça login com seu Github
                            para começar
                        </p>

                        <button type="submit">
                            <img src="/icons/Github.svg" alt=""/>
                            Logar com o Github
                        </button>
                    </main>
                </div>                   
            </div>
        </body>
    )
}