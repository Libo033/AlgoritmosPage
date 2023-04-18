import React, { ReactNode } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

interface IAlgoCardProps {
  title: string,
  logo: ReactNode,
  link: string
}

const AlgoCard: React.FC<IAlgoCardProps> = ({title, logo, link}) => {
  return (
    <Link href={link} className={styles.algoCard}>
      <h2>{title}</h2>
      <div>
        {logo}
      </div>
    </Link>
  )
}

export default AlgoCard