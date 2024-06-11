import React from 'react'
import { useState } from 'react'
import './css/home.css'
const Home = () => {
    const [formDetails, setFormDetails] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handlingChanges = (e) => {
        const {name, value} = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handlingSubmission =(e) =>{
        e.preventDefault();
        console.log(formDetails);
    }
  return (
    <form onSubmit={handlingSubmission}>
    <div>
        <label>
            Enter Your Name
            <input type="text" name='name' value={formDetails.name} onChange={handlingChanges}/>
        </label>
    </div>

    <div>
    <label>
        Enter Your email address
        <input type="email" name='email' value={formDetails.email} onChange={handlingChanges} />
    </label>
    </div>

    <div> 
        <label>
            Kindly Enter Your Message
            <input name='message' value={formDetails.message} onChange={handlingChanges} />
        </label>
    </div>
    <button type='submit'>Submit Form</button>
    </form>
  )
}

export default Home
