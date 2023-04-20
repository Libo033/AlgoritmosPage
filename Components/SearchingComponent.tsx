import React, { useState } from 'react'
import styles from '@/styles/Searching.module.css'

interface ISortingProps{
  arrayModel: number[] 
}

const SearchingComponent: React.FC<ISortingProps> = ({arrayModel}) => {
  const [delay, setDelay] = useState<number>(10)
  const [time, setTime] = useState<number>(0)
  const [reset, setReset] = useState<boolean>(false)
  const [findNum, setFindNum] = useState<number>(0)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [numToSearch, setNumToSearch] = useState<number|undefined>(0)

  const handleReset = () => {
    setReset(true)
    setFindNum(0)
  }

  const secuencialSearch = async () => {
    let begin = Date.now()
    setIsSearching(true)
    let i
    
    if (numToSearch !== undefined) {
      for (i = 0; i < arrayModel.length + 1; i++) {
        delay !== undefined? await sleep(delay) : await sleep(0) ;
        setFindNum(i)
        if (i === numToSearch) {
          break;
        }
      }
      if (i !== numToSearch && i === arrayModel.length + 1) {
        setFindNum(0)
      }
    }

    setIsSearching(false)
    let end = Date.now()
    setTime((-begin+end)/1000);
    setReset(false)
  }

  const binarySearch = async () => {
    let begin = Date.now()
    setIsSearching(true)
    let start=0, end=arrayModel.length-1;
    
    if (numToSearch !== undefined) {
      while (start<=end){
        let mid=Math.floor((start + end)/2);
          setFindNum(arrayModel[mid])
        if (arrayModel[mid] === numToSearch) {
          break;
        } else if (arrayModel[mid] < numToSearch) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
        delay !== undefined? await sleep(delay) : await sleep(0) ;
      }
    }

    setIsSearching(false)
    let endTime = Date.now()
    setTime((-begin+endTime)/1000);
    setReset(false)
  }

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className={styles.searchingComponent}>
      <div className={styles.searchingAnimation}>
        {arrayModel && arrayModel.map((num) => (
          <span 
            key={num} 
            className={findNum === num? styles.spanNumFound : styles.spanNum}
          >{num}</span>
        ))}
      </div>
      <div className={styles.searchingButtonsContainer}>
      <button disabled={isSearching} className={styles.searchingButtons} onClick={() => secuencialSearch()}>Secuencial Search</button>
      <button disabled={isSearching} className={styles.searchingButtons} onClick={() => binarySearch()}>Binary Search</button>
      <button disabled={reset} className={styles.searchingButtons} onClick={() => handleReset()}>Reset</button>
        <label htmlFor="num">Numero a buscar
          <input 
            className={styles.searchInput} 
            type="number" 
            id="num" 
            value={numToSearch}
            onChange={(e) => setNumToSearch(parseInt(e.target.value))}
          />
        </label>
        <label htmlFor="delay">Delay
          <input 
            className={styles.searchInput} 
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

export default SearchingComponent