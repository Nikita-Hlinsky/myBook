import React from 'react'
import style from "./style.module.scss"

function Card({listOfChars}) {

    const {imgUrl, liveStatus, fullName, birthDate} = listOfChars

    return (
        <div className={style.Card}>
            <img src={imgUrl} alt="alt" className={style.CardImage}/>
            <div className={style.CardDescript}>
                <div className={style.liveStat}>{liveStatus}</div>
                <p>{fullName}</p>
                <p className={style.BirthDate}>{birthDate}</p>
            </div>
        </div>
    )
}

export default Card;