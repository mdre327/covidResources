import React from 'react'
import banner from "../../images/banner.jpg"
function Banner() {
    return (
        <div className="Banner"  style={{backgroundImage:`url(${banner})`}}>
            <div className="Banner__image">
                <div className="Banner__title">
                    <h1>J & K   Covid Resources </h1>

                </div>
                <div className="Banner__text">
                    <span> We Are In This Together.<br/> lets bring Our Resources and Help Each other <br/> in these tough Times</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
