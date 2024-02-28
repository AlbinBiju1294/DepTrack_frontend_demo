import React from 'react'
import {PeopleFill} from 'react-bootstrap-icons'
import styles from './Navbar.module.css' 

const Navbar = () => {
  return (
    <>
    <h5 className={styles.navbar_title}>DepTrack</h5>
    <div className={styles.navbar_right}>
        <PeopleFill/>
        <h5 className={styles.navbar_name}>Albin</h5>
    </div>
    </>
  )
}

export default Navbar