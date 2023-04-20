import React from 'react'
import styles from '@/styles/Searching.module.css'

interface ISortingProps{
  arrayModel: number[] 
}

const SearchingComponent: React.FC<ISortingProps> = ({arrayModel}) => {
  return (
    <div className={styles.searchingComponent}>
      <div className={styles.searchingAnimation}>
        {arrayModel && arrayModel.map((num) => (
          <span key={num} className={styles.spanNum}>{num}</span>
        ))}
      </div>
      <div className={styles.searchingButtonsContainer}>

      </div>
    </div>
  )
}

export default SearchingComponent