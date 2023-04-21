import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

interface ILayoutProps {
  children: ReactNode,
  title: string
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap'
})

const Layout: React.FC<ILayoutProps> = ({children, title}) => {
  const titulo = `Algoritmos - ${title}` 
  
  return (
    <>
      <Head>
        <meta name="description" content="Web Page created by Valentin Libonati. - Email: valentinlibonati33@gmail.com. - Linkedin: https://www.linkedin.com/in/valentin-libonati-b608521b7/" />
        <meta name="default-color" />
        <title>{titulo}</title>
        <link rel="apple-touch-icon" sizes="256x256" href="/img/logosolo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logosolo.png" />
        <link rel="shortcut icon" type="image/png" href="/img/logosolo.png" />
      </Head>
      <div className={roboto.className}>
        {children}
      </div>
    </>
  )
}

export default Layout