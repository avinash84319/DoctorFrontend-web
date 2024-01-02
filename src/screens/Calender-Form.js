import '../css/CalenderForm.css';
import React, { useState } from 'react';

function CalenderForm() {

    const [noofhos, setNoofhos] = useState([1]);
    const [noofworks, setNoofworks] = useState([1]);

    const addhos = (e) => {
        e.preventDefault();
        setNoofhos([...noofhos, noofhos.length + 1])
    }

    const addworks = (e) => {
        e.preventDefault();
        setNoofworks([...noofworks, noofworks.length + 1])
    }

    const Hosform = () => {

        return noofhos.map((idx) => {
            return (
                <div className='cal-form-inp-hos'>
                    <input type='text' className="cal-form-input" placeholder='Hospital Name' />
                    <input type='color' className="cal-form-color" placeholder='Hospital Name' />
                    <button className='cal-form-button-addrem' onClick={() => setNoofhos(noofhos.filter((i) => i !== idx))}>❌</button>
                </div>
            )
        })
    }

    const Workdays = () => {

        return noofworks.map((idx) => {
            return (
                <div className='cal-form-inp-work'>
                    <select className="cal-form-input" placeholder='Hospital Name'>
                        <option value="avinash">avinash</option>
                        <option value="avinash">avinash</option>
                        <option value="avinash">avinash</option>
                    </select>
                    <select className="cal-form-input" placeholder='day'>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thurday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                    <input type='time' className="cal-form-input" placeholder='Start Time' />
                    <input type='time' className="cal-form-input" placeholder='End Time' />
                    <button className='cal-form-button-addrem' onClick={() => setNoofworks(noofworks.filter((i) => i !== idx))}>❌</button>
                </div>
            )
        })
    }

    return (<div className="calender-form">

        <div className='cal-form-instruction'>
            <h1>Calender Form</h1>
            <p>Please provide the Hospitals you work in and assign a color for them to be used in your calender</p>
        </div>


        <form className='cal-form-inp-hos'>
            <Hosform />
            <button className='cal-form-button-addrem' onClick={addhos}>➕</button>
        </form>

        <div className='cal-form-instruction'>
            <p>Please provide the information about sessions you take. Give info by chossing hospital,day,times</p>
        </div>

        <form className='cal-form-inp-work'>
            <Workdays />
            <button className='cal-form-button-addrem' onClick={addworks}>➕</button>
        </form>


    </div>
    )
}

export default CalenderForm;