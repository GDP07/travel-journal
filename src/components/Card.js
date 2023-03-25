import React from "react"

export default function Card(Props){
    return(
        <div className="card">
            <img src={Props.imageUrl} />   
            <div className="card--details">
                <div className="card--location">
                    <img src="./images/Pingpoint.png"/>
                    <span className="card--country">{Props.location}</span>
                    <a href={Props.googleMapsUrl} className="card--link">View on Google Maps</a>
                </div>
                <h1 className="card--title">{Props.title}</h1>
                <h3 className="card--time-period">{Props.startDate} - {Props.endDate}</h3>
                <p className="card--description">{Props.description}</p>
            </div>   
        </div>
    )
}