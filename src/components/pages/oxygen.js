import axios from 'axios'
import React, { useEffect, useState} from 'react'

function OxygenPage() {
    const [oxygen, setoxygen] = useState([])
useEffect(()=>{
    axios.get('https://v1.nocodeapi.com/mdre327/google_sheets/RruuEcqslbaeScxT?tabId=Sheet1')
    .then((response) => {
        setoxygen(response.data)
        console.log("1", response.data)
    });
},[]);
    return (
        <div>
            <h5>nocodeapi</h5>
        </div>
    )
}

export default OxygenPage
