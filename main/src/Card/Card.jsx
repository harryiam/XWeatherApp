import React from "react"
import styles from "./Card.module.css"

export default function Card({temp,hum,con,windsp}){
    return(
        <>
        <div className={styles["weather-card"]}>
        <div>
            <h3>Temperature</h3>
            <h5>{temp}</h5>
        </div>
        <div>
            <h3>Humidity</h3>
            <h5>{hum}</h5>
        </div>
        <div>
            <h3>Condition</h3>
            <h5>{con}</h5>
        </div>
        <div>
            <h3>Windspeed</h3>
            <h5>{windsp}</h5>
        </div>
        </div>
        </>
    )
}