import type { AppProps } from 'next/app'
import type { FC } from 'react'
import 'tailwindcss/tailwind.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
