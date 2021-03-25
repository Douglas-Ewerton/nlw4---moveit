import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const {level, closeLevelUpModal, currentExperience, challengesCompleted} = useContext(ChallengesContext)
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                
                <div className={styles.level}>

                    <header>{level}</header>

                    <strong>Avance para<br/>o próximo level</strong>


                </div>

                <div className={styles.status}>

                    DESAFIOS
                    <p>
                        
                        {challengesCompleted} completados
                    </p>
                    
                    EXPERIÊNCIA
                    <p>
                        
                        {currentExperience} xp
                    </p>

                    <img src="/icons/Logo-Modal.svg" alt=""/>

                    <button type="button" onClick={closeLevelUpModal}>
                        <img src="/icons/close.svg" alt="Fechar"/>
                    </button>
                    
                </div>
            </div>
        </div>
    )
     
}