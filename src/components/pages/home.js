import React from 'react'
import Banner from '../layout/header'
import ProvideData from '../layout/provide-data'
import SelectionCards from '../layout/selection-cards'

function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <Banner/>
                <SelectionCards/>
                <ProvideData/>
            </div>
        </div>
    )
}

export default Home
