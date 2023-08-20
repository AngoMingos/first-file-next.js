import Nav from "../components/Nav";
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
    return <>
    <header><Nav /></header>
    <main><Component {...pageProps} /></main>
    <hr/>
    <footer> (c)2023</footer>
    </>
  }