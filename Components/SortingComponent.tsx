import React, { useEffect, useState } from 'react'
import styles from '@/styles/Sorting.module.css'

interface ISortingProps{
  arrayModel: number[] 
}

const SortingComponent: React.FC<ISortingProps> = ({arrayModel}) => {
  const [sortedValues, setSortedValues] = useState<number[]>(arrayModel);
  const [delay, setDelay] = useState<number>(10);
  const [isSorting, setIsSorting] = useState<boolean>(false)
  const [reset, setReset] = useState<boolean>(false)

  const handleReset = (array: number[]) => {
    setReset(true)
    setSortedValues([...sortedValues]);
    setSortedValues(
      array.sort(() => Math.random() - 0.5)
    )
  }

  const initSorting = async () => {
    console.log("Inicio");
    setIsSorting(true)
    for (let i = 0; i < sortedValues.length; i++) {
      for (let j = 0; j < sortedValues.length - i - 1; j++) {
        if (sortedValues[j] > sortedValues[j + 1]) {
          const temp = sortedValues[j];
          sortedValues[j] = sortedValues[j + 1];
          sortedValues[j + 1] = temp;
          await sleep(delay);
          setSortedValues([...sortedValues]);
        }
      }
    }
    setIsSorting(false)
    setReset(false)
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className={styles.sortingComponent}>
      <div className={styles.sortingAnimation}>

        {arrayModel.length > 0 && arrayModel.map(num => (
          <span 
            key={num} style={{height: `${num}rem`}} 
            className={styles.spanNum}
            >
              {num}
          </span>
        ))}

      </div>
      <div className={styles.sortingButtonsContainer}>
        <button disabled={isSorting} onClick={() => initSorting()} className={styles.sortingButtons}>Bubble Sort</button>
        <button disabled={isSorting} className={styles.sortingButtons}>Quick Sort</button>
        <button disabled={reset} className={styles.sortingButtons} onClick={() => handleReset(arrayModel)}>Reset</button>
        <label htmlFor="delay">Delay
          <input 
            className={styles.sortInput} 
            type="number" 
            id="delay" 
            value={delay}
            onChange={(e) => setDelay(parseInt(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}

export default SortingComponent