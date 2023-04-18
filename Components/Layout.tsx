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
        <title>{titulo}</title>
      </Head>
      <div className={roboto.className}>
        {children}
      </div>
    </>
  )
}

export default Layout