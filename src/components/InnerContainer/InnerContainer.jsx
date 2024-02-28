import React from 'react'
import styles from './InnerConatiner.module.css'
import DuBar from '../DuBar/DuBar'

const InnerContainer = () => {
  return (
    <div className={styles.inner_container}>
        <DuBar></DuBar>
    </div>
  )
}

export default InnerContainer