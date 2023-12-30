import { Link } from 'react-router-dom';
import '../css/Appointment.css';
import React, { useState } from 'react';
import Analysis from '../components/Analysis';
import EarlyAnalysis from '../components/EarlyAnalysis';
import Smedicines from '../components/Smedicines';
import Medicines from '../components/Medicines';

function Appointment() {

    const [smedicines,setsMedicines]=useState([])


    function selectmedicine(medicine){
        // first check if medicine is already present in smedicines
        // if present then remove it
        // else add it
        let flag=0;
        let store;
        for (let i=0;i<smedicines.length;i++){
            if (smedicines[i].name===medicine.name){
                flag=1;
                store=JSON.parse(JSON.stringify(smedicines[i]));;
                break;
            }
        }
        if (flag===1){
            removemedicine(medicine)        // remove medicine from smedicines
            let newmedicines=smedicines.filter((smedicine)=>smedicine.name!==medicine.name)                      // just keeping a copy of smedicines
            if (medicine.values.length!==0){                                   // if medicine has values
                if (store.values.length!==0){
                    store.values=[...store.values,...medicine.values];         // add values to store
                    // if any value is repeated then remove it
                    let newvalues=[];
                    for (let i=0;i<store.values.length;i++){
                        if (!newvalues.includes(store.values[i]))                     // if value is not present then add it
                            newvalues.push(store.values[i])
                        else {
                            // remove the value
                            let index=newvalues.indexOf(store.values[i]);          // find index of value
                            newvalues.splice(index,1);                         // remove the value
                        }
                    }
                    store.values=newvalues;
                    setsMedicines([...newmedicines,store])                   // add store to smedicines
                }
                else{
                    store.values=medicine.values;
                    setsMedicines([...newmedicines,store])                  // add store to smedicines
                }
            }
        }
        else
            setsMedicines([...smedicines,medicine])
    }

    function removemedicine(medicine){
        // remove medicine from smedicines
        let newmedicines=smedicines.filter((smedicine)=>smedicine.name!==medicine.name)          // remove medicine from smedicines
        setsMedicines([...newmedicines])                                                      // add store to smedicines
    }

    const addmed = (e) => {                                                       // function to handle buttons in medicines
        if (e.target.innerHTML === '✅' || e.target.innerHTML === '❌'){
            // add medicine to smedicines
            let butt=e.target;
            butt.className='added-medicine';
            selectmedicine({name:e.target.value,values:[]})
        }
        else{                                                               // add value to medicine
            let medicine=e.target.value;
            medicine={name:medicine,values:[e.target.innerHTML]}           // medicine object
            selectmedicine(medicine)
        }
    }

    const arr = [
        { name: "avinash" },                 // patient names
        { name: "subbu" },
        { name: "dixth" },
        { name: "sanjay" }
    ]

    const Patients = () => {
        return arr.map((patient) => {
            return <div className='patient'>{patient.name}</div>
        })
    }

    const medicines = [
        { name: "paracetamol" },
        { name: "crocin" },
        { name: "dolo" },                                //medicines list to be displayed
        { name: "combiflam" },
        { name: "dolopar" },
        { name: "dolokind" },
        { name: "dolokind plus" },
        { name: "dolokind spas" },
        { name: "dolokind mr" },
        { name: "dolokind plus mr" },
        { name: "dolokind spas mr" },
    ]

    const changeclass = (e) => {
        const btn=e.target;
        const div=btn.closest('div');
        if (div.className==='selected-class')
            div.className=btn.value                                // change class of div in the main grid to make that section bigger
        else
            div.className='selected-class'
    }

    return (
        <div className="appointment">
            <div className='queue'>
                <Patients />
            </div>
            <div className='navbar'>
                <Link to='/home' className='nav-link'>Home</Link>
                <Link to='/com' className='nav-link'>Reception</Link>
                <Link to='/cal' className='nav-link'>Calender</Link>
                <Link to='/prof' className='nav-link'>Profile</Link>
            </div>
            <div className="main">
                <div className="prescription">
                    <button onClick={changeclass} className='partition-but' value="prescription">Prescription</button>
                    <div className='prescription-div'>
                        <Smedicines addmed={addmed} smedicines={smedicines} />
                    </div>
                    <input type='button' value='Send' className='submit-presc' />
                </div>
                <div className='medicines'>
                    <div className='medicine-search-div'>
                        <input type="text" placeholder="Search Medicine" className='medicine-search' />
                        <div className='search-icon'></div>
                    </div>
                    <div className='medicine-div'>
                        <Medicines addmed={addmed} medicines={medicines} />
                    </div>
                </div>
                <div className='medical-history'>
                    <button onClick={changeclass} className='partition-but' value='medical-history'>Early Analysis</button>
                    <EarlyAnalysis />
                </div>
                <div className='analysis'>
                    <button onClick={changeclass} className='partition-but' value='analysis'>Analysis</button>
                    <Analysis />
                </div>
            </div>
        </div>
    );
}

export default Appointment;