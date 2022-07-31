import '../public/css/globals.css'
import type { AppProps } from 'next/app'
import Document from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <title>Coming Soon...</title>
      <h1 style={{ fontSize: "150px", position: "absolute", marginTop: "870px" }}>👀</h1>
    </div>
  )
}

export default MyApp
