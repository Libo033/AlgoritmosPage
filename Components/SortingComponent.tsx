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
  const [time, setTime] = useState(0)
  
  const handleReset = (array: number[]) => {
    setReset(true)
    setSortedValues([...sortedValues]);
    setSortedValues( array.sort(() => Math.random() - 0.5) )
  }

  const bubbleSorting = async () => {
    let begin = Date.now()

    setIsSorting(true)
    for (let i = 0; i < sortedValues.length; i++) {
      for (let j = 0; j < sortedValues.length - i - 1; j++) {
        if (sortedValues[j] > sortedValues[j + 1]) {
          const temp = sortedValues[j];
          sortedValues[j] = sortedValues[j + 1];
          sortedValues[j + 1] = temp;
          delay !== undefined? await sleep(delay) : await sleep(0) ;
          setSortedValues([...sortedValues]);
        }
      }
    }
    setIsSorting(false)
    setReset(false)

    let end = Date.now()
    setTime((-begin+end)/1000);
  }

  const gnomeSort = async () => {
    let begin = Date.now()

    setIsSorting(true);
    let pos = 1;

    while (pos < sortedValues.length) {
      if (pos == 0) pos++;
        
      if (sortedValues[pos] >= sortedValues[pos - 1]){
        pos++;
      } else {
        let temp = 0;
        temp = sortedValues[pos];
        sortedValues[pos] = sortedValues[pos - 1];
        sortedValues[pos - 1] = temp;
        pos--;
      }

      delay !== undefined? await sleep(delay) : await sleep(0) ;
      setSortedValues([...sortedValues]);
    }

    setReset(false)
    setIsSorting(false);

    let end = Date.now()
    setTime((-begin+end)/1000);
  }

  const insertionSort = async () => {
    let begin = Date.now()

    setIsSorting(true);
    let n = sortedValues.length;

    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = sortedValues[i];
      // The last element of our sorted subarray
      let j = i-1; 
      while ((j > -1) && (current < sortedValues[j])) {
        sortedValues[j+1] = sortedValues[j];
          j--;
      }
      sortedValues[j+1] = current;

      delay !== undefined? await sleep(delay) : await sleep(0) ;
      setSortedValues([...sortedValues]);
    }
    setReset(false)
    setIsSorting(false);

    let end = Date.now()
    setTime((-begin+end)/1000);
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className={styles.sortingComponent}>
      <div className={styles.sortingAnimation}>

        {arrayModel.length > 0 && arrayModel.map(num => (
          <span 
            key={num} style={{height: `${num*3}%`}} 
            className={styles.spanNum}
            >
              {num}
          </span>
        ))}

      </div>
      <div className={styles.sortingButtonsContainer}>
        <button disabled={isSorting} onClick={() => bubbleSorting()} className={styles.sortingButtons}>Bubble Sort</button>
        <button disabled={isSorting} onClick={() => gnomeSort()} className={styles.sortingButtons}>Gnome Sort</button>
        <button disabled={isSorting} onClick={() => insertionSort()} className={styles.sortingButtons}>Insertion Sort</button>
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
        <h2>Time: {time}</h2>
      </div>
    </div>
  )
}

export default SortingComponent