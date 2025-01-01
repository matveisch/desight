import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Desight - Your website description here" />
        <meta name="robots" content="index, follow" />
        
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://www.desight.co/en" />
        <link rel="alternate" hrefLang="ru" href="https://www.desight.co/ru" />
        <link rel="alternate" hrefLang="he" href="https://www.desight.co/he" />
        <link rel="alternate" hrefLang="x-default" href="https://www.desight.co/en" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Desight" />
        <meta property="og:description" content="Your website description here" />
        <meta property="og:image" content="https://www.desight.co/og-image.jpg" />
        <meta property="og:url" content="https://www.desight.co" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desight" />
        <meta name="twitter:description" content="Your website description here" />
        <meta name="twitter:image" content="https://www.desight.co/og-image.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Desight",
              "url": "https://www.desight.co",
              "logo": "https://www.desight.co/logo.png",
              "sameAs": [
                // Add your social media URLs here
                "https://twitter.com/desight",
                "https://www.linkedin.com/company/desight"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}