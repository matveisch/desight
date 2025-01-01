import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
}

const translations: Record<string, SEOProps> = {
  en: {
    title: "Desight - English Title",
    description: "English description of your website",
  },
  ru: {
    title: "Desight - Русский заголовок",
    description: "Описание вашего сайта на русском",
  },
  he: {
    title: "Desight - כותרת בעברית",
    description: "תיאור האתר שלך בעברית",
  },
}

export const useSEO = () => {
  const { locale = 'en' } = useRouter()
  return translations[locale] || translations.en
} 