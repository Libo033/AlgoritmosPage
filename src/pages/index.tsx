import styles from '@/styles/Home.module.css'
import Layout from '../../Components/Layout'
import AlgoCard from '../../Components/AlgoCard'

export default function Home() {
  const sortLogo = (
    <svg className={styles.algoCardLogo} xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
      <path d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2zm4-3h2v17h-2z" />
    </svg>
  )

  const searchLogo = (
    <svg className={styles.algoCardLogo} xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
      <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"/>
    </svg>
  )

  return (
    <Layout title='Home'>
      <section className={styles.homePage}>
        <div className={styles.homePageTitle}>
          <h1>ALGORITMOS</h1>
          <h3>
            Procedimiento computacional bien definido que parte de un estado inicial y un valor o un conjunto de valores de entrada, a los cuales se les aplica una secuencia de pasos computacionales finitos, produciendo una salida o solución.
          </h3>
        </div>
        <div className={styles.homePageMenu}>
          <AlgoCard 
            title={'Sorting / Ordenamieno'} 
            logo={sortLogo} 
            link='/sorting'
          />
          <AlgoCard 
            title={'Searching / Busqueda'} 
            logo={searchLogo}
            link='/searching' 
          />
        </div>
      </section>
    </Layout>
  )
}
