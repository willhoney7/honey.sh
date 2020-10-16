import '../styles/global.css';
import BouncingWinston from '../components/bouncing-winston';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <BouncingWinston />
        </>
    );
}
