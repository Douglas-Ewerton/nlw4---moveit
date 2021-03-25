import { clear } from 'console';
import { useState , useEffect, useContext} from 'react'
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountDownContext)

    const [minutesLeft , minutesRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft , secondsRight] = String(seconds).padStart(2, '0').split('')

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                    
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            
            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}>

                    Finalizado

                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            onClick={resetCountdown} 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>

                            Abandonar ciclo

                        </button>
            ) : (
                        <button 
                            onClick={startCountdown} 
                            type="button" 
                            className={styles.countdownButton}>
                                
                            Iniciar um ciclo

                        </button>
            )}
                </>
            )}

            
        </div>
    );
}