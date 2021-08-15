import React from 'react'
import style from "./style.module.scss"
import Card from '../../moleculs/Card'
import { v4 as uuidv4 } from 'uuid';


function CardList() {

    const listOfChars = [
        {
          id: uuidv4(), 
          fullName: 'Walter White',
          birthDate: '09-07-1958',
          imgUrl: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
          liveStatus: 'Deceased',
        },
        {
          id: uuidv4(),
          fullName: 'Jesse Pinkman',
          birthDate: '09-24-1984',
          imgUrl: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
          liveStatus: 'Alive',
        },
        {
          id: uuidv4(),
          fullName: 'Skyler White',
          birthDate: '08-11-1970',
          imgUrl: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
          liveStatus: 'Alive',
        },
        {
          id: uuidv4(),
          fullName: 'Walter White Jr.',
          birthDate: '07-08-1993',
          imgUrl: 'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg',
          liveStatus: 'Alive',
        },
        {
          id: uuidv4(),
          fullName: 'Henry Schrader',
          birthDate: 'Unknown',
          imgUrl: 'https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136',
          liveStatus: 'Deceased',
      }
    ]

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