import "@/styles/globals.css";
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react/ssr';

export default function App({ Component, pageProps }) {
  return (
    <PorscheDesignSystemProvider>
    <Component {...pageProps} />
    </PorscheDesignSystemProvider>
  )
}
