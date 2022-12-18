import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import GlobalStyles from '@/styles/global'
import { DefaultSeo } from 'next-seo'
import { NEXT_SEO } from '@/../next-seo.config'
import { MainLayout } from '@/layouts/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...NEXT_SEO} />
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
