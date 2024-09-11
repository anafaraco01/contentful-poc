import { Html, Head, Main, NextScript } from "next/document";
import {
  getInitialStyles,
  getFontFaceStylesheet,
  getFontLinks,
  getComponentChunkLinks,
  getIconLinks,
  getMetaTagsAndIconLinks,
  getDSRPonyfill,
  getCookiesFallbackScript,
  getBrowserSupportFallbackScript,
} from '@porsche-design-system/components-react/partials';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* necessary for SSR support, injects stylesheet which defines visibility of pre-hydrated PDS components */}
        {getInitialStyles({ format: 'jsx' })}
        {/* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) */}
        {getFontFaceStylesheet({ format: 'jsx' })}
        {/* preloads Porsche Next font (=> minimize FOUT) */}
        {getFontLinks({ format: 'jsx' })}
        {/* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) */}
        {getComponentChunkLinks({ format: 'jsx' })}
        {/* preloads Porsche icons (=> minimize FOUC) */}
        {getIconLinks({ format: 'jsx' })}
        {/* injects favicon, apple touch icons, android touch icons, etc. */}
        {getMetaTagsAndIconLinks({ appTitle: 'Sample Project Next.js', format: 'jsx' })}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* necessary for SSR support, enables declarative shadow dom support for Safari and Firefox */}
        {getDSRPonyfill({ format: 'jsx' })}
        {/* shows a cookie fallback overlay and blocks the page, in case cookies are disabled */}
        {getCookiesFallbackScript({ format: 'jsx' })}
        {/* shows a browser fallback overlay and blocks the page, in case browser is not supported (e.g. IE11) */}
        {getBrowserSupportFallbackScript({ format: 'jsx' })}
      </body>
    </Html>
  );
}
