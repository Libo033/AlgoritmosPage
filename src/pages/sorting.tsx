import React from 'react'
import Layout from '../../Components/Layout'
import styles from '@/styles/Sorting.module.css'
import Link from 'next/link'
import SortingComponent from '../../Components/SortingComponent'

const sorting = () => {
  const arrayModel: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

  return (
    <Layout title='Ordenamiento'>
      <div className={styles.sortPage}>
        <div className={styles.goBack}>
          <Link href={'/'}>
            <svg className={styles.goBackArrow} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
              <path d="m8.121 12 4.94-4.939-2.122-2.122L3.879 12l7.06 7.061 2.122-2.122z"/>
              <path d="M17.939 4.939 10.879 12l7.06 7.061 2.122-2.122L15.121 12l4.94-4.939z"/>
            </svg>
          </Link>
          <h3>Algoritmos de Ordenamiento</h3>
        </div>
        <div className={styles.sortComponentContainer}>
          <SortingComponent arrayModel={arrayModel} />
        </div>
      </div>
    </Layout>
  )
}

export default sorting