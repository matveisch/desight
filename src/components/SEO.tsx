import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSEO } from '../hooks/useSEO'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

export const SEO = ({ title, description, image }: SEOProps) => {
  const router = useRouter()
  const defaultSEO = useSEO()
  const seoTitle = title || defaultSEO.title
  const seoDescription = description || defaultSEO.description
  const seoImage = image || 'https://www.desight.co/og-image.jpg'

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={`https://www.desight.co${router.asPath}`} />
      
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Head>
  )
} 