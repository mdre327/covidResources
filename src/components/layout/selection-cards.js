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
            <div className="selection-cards__wrapper">
            <div className="selection-cards__row">
            <Link to={"/bed-detail"}>
            <Card
            cardCname={"selection-cards__card iBed"}
            textCname="selection-cards__title"
            roles="button"
            title="Beds"
            />
            </Link>
            <Link to={"/oxygen-detail"}>
            <Card
            cardCname="selection-cards__card iOxygen"
            textCname="selection-cards__title"
            roles="button"
            title="Oxygen"
            />
            </Link>
            </div>
            <div className="selection-cards__row">
            <Link to={"/medicine-detail"}>
            <Card
            cardCname="selection-cards__card iMed"
            textCname="selection-cards__title"
            roles="button"
            title="Medicine"
            />
            </Link>
            <Link to={"/plasma-detail"}>
            
            <Card
            cardCname="selection-cards__card iPlasma"
            textCname="selection-cards__title"
            roles="button"
            title="Plasma"
            />
            </Link>
            </div>
            </div>
        </div>
    )
}

export default SelectionCards
