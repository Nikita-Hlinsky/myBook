import React from 'react'
import CardLIstStyle from "./CardList.module.scss"
import Card from '../../moleculs/Card'

export default function CardList({listOfChars}) {

    const charList = listOfChars.map((chars) => {
        <li>
            <Card listOfChars={chars}/>
        </li>
    })

    return (
        <div className={CardLIstStyle.CardList}>
            { charList }
        </div>
    )
}
