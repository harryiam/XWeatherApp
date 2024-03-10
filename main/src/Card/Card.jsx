import React from "react"
import "./Card.module.css"

export default function Card({temp,hum,con,windsp}){
    return(
        <>
        <div className="weather-cards">
        <div className="weather-card">
            <h3>Temperature</h3>
            <h5>{temp}</h5>
        </div>
        <div className="weather-card">
            <h3>Humidity</h3>
            <h5>{hum}</h5>
        </div>
        <div className="weather-card">
            <h3>Condition</h3>
            <h5>{con}</h5>
        </div>
        <div className="weather-card">
            <h3>Windspeed</h3>
            <h5>{windsp}</h5>
        </div>
        </div>
        </>
    )
}