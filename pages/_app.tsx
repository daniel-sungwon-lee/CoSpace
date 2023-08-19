import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "cospace-ds3.firebaseapp.com",
  projectId: "cospace-ds3",
  storageBucket: "cospace-ds3.appspot.com",
  messagingSenderId: "126456952162",
  appId: "1:126456952162:web:f4999742c2777e3751283b",
  measurementId: "G-1ZNJW96TH7"
}

const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
