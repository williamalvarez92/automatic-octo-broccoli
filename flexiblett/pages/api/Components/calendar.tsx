import React from 'react'
import styles from '../../../styles/Calendar.module.scss'

export default function Calendar () {
  return (
    <>
<div className={styles.calendar}>
  <div className={styles.timeline}>
    <div className={styles.spacer}></div>
    <div className={styles.timeMarker}>9 AM</div>
    <div className={styles.timeMarker}>10 AM</div>
    <div className={styles.timeMarker}>11 AM</div>
    <div className={styles.timeMarker}>12 PM</div>
    <div className={styles.timeMarker}>1 PM</div>
    <div className={styles.timeMarker}>2 PM</div>
    <div className={styles.timeMarker}>3 PM</div>
    <div className={styles.timeMarker}>4 PM</div>
    <div className={styles.timeMarker}>5 PM</div>
    <div className={styles.timeMarker}>6 PM</div>
  </div>
  <div className={styles.days}>
    <div className={styles.dayMon}>
      <div className={styles.date}>
        <p className={styles.dateNum}>9</p>
        <p className={styles.dateDay}>Mon</p>
      </div>
      <div className={styles.events}>
              <div className={ styles.event__securities } id={styles.start2}>
          <p className={styles.title}>Securities Regulation</p>
          <p className={styles.time}>2 PM - 5 PM</p>
        </div>
      </div>
    </div>
    <div className={styles.day}>
      <div className={styles.date}>
        <p className={styles.dateNum}>10</p>
        <p className={styles.dateDay}>Tues</p>
      </div>
      <div className={styles.events}>
        <div className={styles.event__corpFi} id={styles.start10}>
          <p className={styles.title}>Corporate Finance</p>
          <p className={styles.time}>10 AM - 12 PM</p>
        </div>
              <div className={styles.event__entLaw}id={styles.start1}>
          <p className={styles.title}>Entertainment Law</p>
          <p className={styles.time}>1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div className={styles.day}>
      <div className={styles.date}>
        <p className={styles.dateNum}>11</p>
        <p className={styles.dateDay}>Wed</p>
      </div>
      <div className={styles.events}>
        <div className={styles.event__writing}id={styles.start11}>
          <p className={styles.title}>Writing Seminar</p>
          <p className={styles.time}>11 AM - 12 PM</p>
        </div>
        <div className={styles.event__securities}id={styles.start2}>
          <p className={styles.title}>Securities Regulation</p>
          <p className={styles.time}>2 PM - 5 PM</p>
        </div>
      </div>
    </div>
    <div className={styles.day}>
      <div className={styles.date}>
        <p className={styles.dateNum}>12</p>
        <p className={styles.dateDay}>Thurs</p>
      </div>
      <div className={styles.events}>
              <div className={styles.event__corpFi} >
                <p className={styles.title}>Corporate Finance</p>
          <p className={styles.time}>10 AM - 12 PM</p>
                
          
        </div>
              <div className={styles.event__entLaw} id={styles.start1}>
          <p className={styles.title}>Entertainment Law</p>
          <p className={styles.time}>1PM - 4PM</p>
        </div>
      </div>
    </div>
    <div className={styles.day}>
      <div className={styles.date}>
        <p className={styles.dateNum}>13</p>
        <p className={styles.dateDay}>Fri</p>
      </div>
      <div className={styles.events}>
      </div>
    </div>
  </div>
</div > 
</>
)}