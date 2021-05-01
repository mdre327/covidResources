import React from 'react'
import Card from '../common/card'

import { Link } from 'react-router-dom'
function SelectionCards() {
    // const stylesO = {
    //     backgroundImage=url('');
    // }
    // const stylesB = {
    //     backgroundImage=url("../../images/");
    // }
    // const stylesM = {
    //     backgroundImage=`url(${medicine})`
    // }
    return (
        <div className="selection-cards">
        <div className="selection-cards__header">
            <h1> J & K  Covid-Resources </h1>
            <span className="selection-cards__heading"> Select One of The card to Find The Availibility Of Your Desired Resource </span>
        </div>
            <div className="selection-cards__wrapper">
         
            <Link to={"/bed-detail"}>
            <Card
            cardCname={"selection-cards__card iBed"}
            textCname="selection-cards__title"
            roles="button"
            title="Beds"
            icon="fas fa-procedures"
            />
            </Link>
            <Link to={"/oxygen-detail"}>
            <Card
            cardCname="selection-cards__card iOxygen"
            textCname="selection-cards__title"
            roles="button"
            title="Oxygen"
            icon="fas fa-tree"
            />
            </Link>
  
    
            <Link to={"/medicine-detail"}>
            <Card
            cardCname="selection-cards__card iMed"
            textCname="selection-cards__title"
            roles="button"
            title="Medicine"
            icon="fas fa-pills"
            />
            </Link>
            <Link to={"/plasma-detail"}>
            
            <Card
            cardCname="selection-cards__card iPlasma"
            textCname="selection-cards__title"
            roles="button"
            title="Plasma"
            icon="fas fa-tint"
            />
            </Link>
          
            </div>
        </div>
    )
}

export default SelectionCards
