import React, {  useState } from 'react'
import axios from 'axios';
function ProvideData() {

    const[error,setErr]=useState(false);
    const [submit, setsubmit] = useState(false);
    const [id,setId] =useState(0)
const [data, setData] = useState({
    name:"",
    time:"",
    contact:"",
    location:"",
    cat:"",
       vrAt:"",
    msg:"",
});
const  { name, time, contact, location,cat, vrAt, msg} =data;
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
        console.log(id,data,"wdhus")
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log("f", data);
        console.log(name)
        axios.post( 'https://v1.nocodeapi.com/mdre3277/google_sheets/pkGhDDyKRjyxKLQE?tabId=Sheet1',[[name.toString(),time.toString(),contact.toString(),location.toString(),cat.toString(),vrAt.toString(),msg.toString(),new Date().toLocaleDateString()]])
        .then(response =>{
            console.log(response,"res");
            setData({...data, name:"", time:"", contact:"", location:"", cat:"", msg:"",})
            setsubmit(true)
        })
        .catch(error =>{
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

    const handleSubmitBtn=(e)=>{
        console.log("clicke")
        setId(id+1);
    }


    return (
        <div className="submit-details">
            <div className="submit-details__title">
                <span className="submit-details__heading"> You Can Also Help</span><br />
                <span className="submit-details__desc">By Providing Any Details of Bed,Oxygen, medicine or plasma <br /> In The Form Below</span>
            </div>
            <div className="submit-details__form">
                <form className="submit-details__form-sec" onSubmit={handleSubmit} >
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                            <input type="text" className="submit-details__input-field" placeholder="Your Full Name" name="name" value={name} onChange ={handleChange}/>
                        </div>
                        <div className="submit-details__input-sec">
                            <input type="text" className="submit-details__input-field" placeholder="enter date-time of availibility" value={time} name="time"  onChange ={handleChange}/>
                        </div>
                    </div>
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                            <input type="text" className="submit-details__input-field" placeholder="enter Contact Number" name="contact" value={contact} onChange ={handleChange}/>
                        </div>
                        <div className="submit-details__input-sec">
                            <input type="text" className="submit-details__input-field" placeholder="Location" name ="location" value={location} onChange ={handleChange}/>
                        </div>
                    </div>
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                            <select name="catagories" id="catagories" className="submit-details__input-field"  onChange ={handleChange}>
                            <option disabled={true} >select</option>   
                            <option value="oxygen">Oxygen</option>
                                <option value="bed">Bed</option>
                                <option value="plasma">Plasma</option>
                                <option value="medicine">medicine</option>
                            </select>
                        </div>
                        <div className="submit-details__input-sec">
                            <input type="text" className="submit-details__input-field" placeholder="last verified at" name="vrAt" value={vrAt}  onChange ={handleChange} />
                        </div>
                    </div>
                    <div className="submit-details__row">
                    <textarea className="submit-details__input-field" placeholder=""id="textAreaForm" name="msg" rows="10" cols="50" value={msg} onChange={handleChange}>
                    Enter Additional Information Here In this Text Area
                    </textarea>

                    </div>
                    <div className="submit-details__submit-sec">
                        <button type="submit" className="submit-details__submit-btn" onClick={handleSubmitBtn}>Submit</button>
                    </div>
                </form>
                {error ?<h1>could not be submited try agin later  or call on 7780988972</h1> : null}
                {submit ? <h1> submitted successfully</h1> : ""}
            </div>
        </div>
    )
}

export default ProvideData
