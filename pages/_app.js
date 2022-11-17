import '../styles/w3.css'
import '../styles/Oswald.css'
import '../styles/Open-Sans.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="w3-content" style={{maxWidth:'1600px'}}>
        <Component {...pageProps} />
     </div>
  )
}

export default MyApp
