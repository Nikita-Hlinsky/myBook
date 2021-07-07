import React from 'react'
import CardStyle from "./Card.module.scss"

export default function Card({listOfChars}) {

    const {imgUrl, liveStatus, fullName, birthDate} = listOfChars

    return (
        <div className={CardStyle.Card}>
            <img src={imgUrl} alt="alt" className={CardStyle.CardImage}/>
            <div className={CardStyle.CardDescript}>
                <div className={CardStyle.liveStat}>{liveStatus}</div>
                <p>{fullName}</p>
                <p className={CardStyle.BirthDate}>{birthDate}</p>
            </div>
        </div>
    )
}
