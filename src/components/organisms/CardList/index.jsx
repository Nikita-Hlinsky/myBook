import React from 'react'
import style from "./style.module.scss"
import Card from '../../moleculs/Card'

function CardList({listOfChars}) {

    const charList = listOfChars.map(chars => {
        return (
            <Card listOfChars={chars} key={chars.id}/>
        )
    })

    return (
        <div className={style.CardList}>
            { charList }
        </div>
    )
}

export default CardList;