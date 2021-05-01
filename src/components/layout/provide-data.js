import React, { useState } from 'react'
import axios from 'axios';
function ProvideData() {

    const [error, setErr] = useState(false);
    const [submit, setsubmit] = useState(false);
    const [id, setId] = useState(0)
    const [data, setData] = useState({
        name: "",
        time: "",
        contact: "",
        location: "",
        cat: "",
        vrAt: "",
        msg: "",
    });
    const { name, contact, location, cat, msg } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
        console.log(id, data, "wdhus")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("f", data);
        console.log(name)
        axios.post('https://v1.nocodeapi.com/mdre3277/google_sheets/pkGhDDyKRjyxKLQE?tabId=Sheet1', [[name.toString(),  contact.toString(), location.toString(), cat.toString(),  msg.toString(), new Date().toLocaleDateString(), "TRUE"]])
            .then(response => {
                console.log(response, "res");
                setData({ ...data, name: "",  contact: "", location: "", cat: "", msg: "", })
                setsubmit(true)
            })
            .catch(error => {
                console.log(error)
                setErr(true)
            })






        /* 
         const axios = require('axios');
     
 axios({
     method: 'POST',
     url: 'https://v1.nocodeapi.com/mdre327/google_sheets/RruuEcqslbaeScxT', 
     params: {tabId: 'Sheet1'}, 
     data: [
         [[
             data.name, 
             data.time,
             data.vrAt,
             data.contact,
             data.location,
             
         ]]
     ]
 }).then(function (response) {
         // handle success
         console.log("success",response.data);
 }).catch(function (error) {
         // handle error
         console.log("eeeeke3",error);
 }) */
        /* 
                try {
        
                    const response = await fetch("https://v1.nocodeapi.com/mdre327/google_sheets/RruuEcqslbaeScxT?tabId=Sheet1",
                   { 
                       method:'POST',
                       headers:{
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify([
                           [name,time,contact,location,cat,vrAt,msg, new Date().toLocaleDateString()]
                        ])
                       
                
                });
                await response.json();
                setData({...data, name, time, contact, location, cat,vrAt, msg})
                } catch (error) {
                    console.log(error)
                } */


    }

    const handleSubmitBtn = (e) => {
        console.log("clicke")
        setId(id + 1);
        
    }


    return (
        <div className="submit-details">
            <div className="submit-details__title">
                <span className="submit-details__heading"> You Can Also Help</span><br />
                <span className="submit-details__desc">By Providing Any Details of Bed,Oxygen, medicine or plasma In The Form  and our backend team will verify it  and the people in need can later use the resource.  </span>
            </div>
            <div className="submit-details__form">
                <form className="submit-details__form-sec" onSubmit={handleSubmit} >
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                            <span className="submit-details__label">Full Name</span>
                            <input type="text" className="submit-details__input-field" placeholder="Your Full Name" name="name" value={name} onChange={handleChange} />
                        </div>
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Catagories</span>
                            <select name="catagories" id="catagories" className="submit-details__input-field" onChange={handleChange} >
                                <option disabled={true} value={""} >select</option>
                                <option value="oxygen">Oxygen</option>
                                <option value="bed">Bed</option>
                                <option value="plasma">Plasma</option>
                                <option value="medicine">medicine</option>
                            </select>
                        </div>
                    </div>
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Contact Number</span>
                            <input type="text" className="submit-details__input-field" required maxLength="10" placeholder="enter Contact Number" name="contact" value={contact} onChange={handleChange} />
                        </div>
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Location</span>
                            <input type="text" className="submit-details__input-field" required placeholder="Location" name="location" value={location} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="submit-details__row">
                    <span className="submit-details__label">message</span>
                        <textarea className="submit-details__input-field" placeholder="Enter Additional Information Here In this Text Area" id="textAreaForm" name="msg" rows="10" cols="50" value={msg} onChange={handleChange}>          
                    </textarea>

                    </div>
                    <div className="submit-details__submit-sec">
                        <button type="submit" className="submit-details__submit-btn" onClick={handleSubmitBtn}>Submit</button>
                    </div>
                </form>
                {error ? <h1 className="toast">could not be submited try agin later  or call on 7780988972</h1> : null}
                {submit ? <h1 className="toast"> submitted successfully</h1> : ""}
            </div>
        </div>
    )
}

export default ProvideData
