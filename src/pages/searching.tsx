import React from 'react'
import Layout from '../../Components/Layout'
import styles from '@/styles/Searching.module.css'
import Link from 'next/link'

const searching = () => {
  return (
    <Layout title="Busqueda">
      <div className={styles.searchPage}>
        <div className={styles.goBack}>
          <Link href={'/'}>
            <svg className={styles.goBackArrow} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
              <path d="m8.121 12 4.94-4.939-2.122-2.122L3.879 12l7.06 7.061 2.122-2.122z"/>
              <path d="M17.939 4.939 10.879 12l7.06 7.061 2.122-2.122L15.121 12l4.94-4.939z"/>
            </svg>
          </Link>
          <h3>Algoritmos de Busqueda</h3>
        </div>
        <div className={styles.searchComponentContainer}>
          
        </div>
      </div>
    </Layout>
  )
}

export default searching