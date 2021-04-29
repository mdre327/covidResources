import React from 'react'
import Card from '../common/card'
import oxyger from "../../images/oxygen.jpg"
import bed from "../../images/bed.jpg"
import medicine from "../../images/medicine.jpg"
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
            <Link to={"/oxygen-detail"}>
            <Card
            cardCname={"selection-cards__card iBed"}
            textCname="selection-cards__title"
            roles="button"
            title="Beds"
            />
            </Link>

            <Card
            cardCname="selection-cards__card iOxygen"
            textCname="selection-cards__title"
            roles="button"
            title="Oxygen"
            />

            </div>
            <div className="selection-cards__row">

            <Card
            cardCname="selection-cards__card iMed"
            textCname="selection-cards__title"
            roles="button"
            title="Medicine"
            />


            <Card
            cardCname="selection-cards__card iPlasma"
            textCname="selection-cards__title"
            roles="button"
            title="Plasma"
            />
            </div>
            </div>
        </div>
    )
}

export default SelectionCards
