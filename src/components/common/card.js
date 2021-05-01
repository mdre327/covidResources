import React from 'react'

function Card(props) {
    return (
        <div className={props.cardCname} >
            <div className={props.textCname}>
            <i className={props.icon}></i>
            
            <span>{props.title}</span></div>
        </div>
    )
}

export default Card
