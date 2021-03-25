import '../styles/global.css'

import {ChallengsProvider } from "../contexts/ChallengesContext";
import { CountDownProvider } from '../contexts/CountDownContext';

function MyApp({ Component, pageProps }) {
  return (

    <Component {...pageProps} />

  )
}

export default MyApp
