import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ContainerContext from '../context/ContainerContext'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { NavigationProvider } from '../components/custom/Navigation/_context'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ContainerContext>
      <NavigationProvider>
      <Component {...pageProps} />
      </NavigationProvider>
    </ContainerContext>
  </Provider>
}
