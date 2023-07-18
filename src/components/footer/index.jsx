import React from 'react'
import styles from './index.module.css'
import { IconHeartFilled } from '@tabler/icons-react'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Developed with <IconHeartFilled /> by LaB Develops - 2023</p>
    </div>
  )
}
