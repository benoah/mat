import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Avatar from "./97.png";
import { getCurrentTime } from "../utils/getTime";
import { getCurrentDate } from "../utils/getDate";



export default function Nav() {

  const [date, setDate] = useState<string | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);

  useEffect(() => {
    setInterval(() => {
      let { year, month, day } = getCurrentDate();
      setDate(`${day}-${month}-${year}`);
    }, 1000);

    setInterval(() => {
      let { hours, minutes, format } = getCurrentTime();
      setTime(`${hours}:${minutes} ${format}`);
    }, 1000);
  }, []);
  
  return (
    <nav className="container">
    <div className={styles.logoWrapper}>
      <h1>Mattilsynet</h1>
    </div>
    <div className={styles.linksWrapper}>
      <div className={styles.links}>
      </div>
      <div className={styles.profile}>
        <img src={Avatar} className={styles.profileImg} alt={"avatar"} />
        <h1 className={styles.name}>Ben Moussa</h1>
        <div className={styles.date}>
          <p>{date}</p>
          <h1>{time}</h1>
        </div>
      </div>
    </div>
  </nav>
  )
}