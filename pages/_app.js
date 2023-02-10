import '@/styles/globals.css'
import { AppContextProvider } from '@/components/context/AppContext'

export default function App({ Component, pageProps }) {

  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}
