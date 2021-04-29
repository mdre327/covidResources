import React from 'react'

function Card(props) {
    return (
        <div className={props.cardCname} >
            <div className={props.textCname}><span>{props.title}</span></div>
        </div>
    )
}

export default Card
