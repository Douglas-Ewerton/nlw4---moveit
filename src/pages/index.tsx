import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Head from "next/head";

import { GetServerSideProps } from "next"

import styles from '../styles/pages/Home.module.css'

import { ChallengerBox } from "../components/ChallengerBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengsProvider } from "../contexts/ChallengesContext";
import { Sidebar } from "../components/Sidebar";


interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengsProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | moveit</title>
        </Head>
        
        <Sidebar />
          
        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
                <ChallengerBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengsProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}