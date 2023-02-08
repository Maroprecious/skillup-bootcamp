import '@/styles/globals.css'
import { ModalProvider } from '@/public/context/openmodal.context'

export default function App({ Component, pageProps }) {
  return <ModalProvider><Component {...pageProps} /></ModalProvider>
}
