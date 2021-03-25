import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengerBox.module.css'

export function ChallengerBox(){
    const {activeChallenge, resetChallenge, completeChallege} = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountDownContext)

    function handleChallengeSucceded() {
        completeChallege()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()

    }
    
    return(
        <div className={styles.challengerBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganher {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailButton}
                            onClick={handleChallengeFailed}
                        >Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccededButton}
                            onClick={handleChallengeSucceded}
                        >Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challegerNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>

                    <p>
                        <img src="icons/level-up.svg" alt="Level-up"/>
                        avance de level completando os desafios
                    </p>
                </div>
            )}
        </div>
    );
}