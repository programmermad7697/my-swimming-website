import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://ynoum6e4e0je.usemoralis.com:2053/server"
      appId="1sz7xNFlywLtZkekS7UEStxwcGlpzgttNU0v000A"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
