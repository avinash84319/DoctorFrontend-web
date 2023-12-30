import { Link } from 'react-router-dom';
import '../css/Appointment.css';
import React, { useState } from 'react';

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
            removemedicine(medicine)
            let newmedicines=smedicines.filter((smedicine)=>smedicine.name!==medicine.name)
            if (medicine.values.length!==0){
                if (store.values.length!==0){
                    store.values=[...store.values,...medicine.values];
                    // if any value is repeated then remove it
                    let newvalues=[];
                    for (let i=0;i<store.values.length;i++){
                        if (!newvalues.includes(store.values[i]))
                            newvalues.push(store.values[i])
                        else {
                            // remove the value
                            let index=newvalues.indexOf(store.values[i]);
                            newvalues.splice(index,1);
                        }
                    }
                    store.values=newvalues;
                    setsMedicines([...newmedicines,store])
                }
                else{
                    store.values=medicine.values;
                    setsMedicines([...newmedicines,store])
                }
            }
        }
        else
            setsMedicines([...smedicines,medicine])
    }

    function removemedicine(medicine){
        // remove medicine from smedicines
        let newmedicines=smedicines.filter((smedicine)=>smedicine.name!==medicine.name)
        setsMedicines([...newmedicines])
    }

    const addmed = (e) => {
        if (e.target.innerHTML === '✅' || e.target.innerHTML === '❌'){
            // add medicine to smedicines
            let butt=e.target;
            butt.className='added-medicine';
            selectmedicine({name:e.target.value,values:[]})
        }
        else if (e.target.innerHTML === '🌄'){
            let medicine=e.target.value;
            medicine={name:medicine,values:['🌄']}
            selectmedicine(medicine)
        }
        else if (e.target.innerHTML === '🕛'){
            let medicine=e.target.value;
            medicine={name:medicine,values:['🕛']}
            selectmedicine(medicine)
        }
        else if (e.target.innerHTML === '🌙'){
            let medicine=e.target.value;
            medicine={name:medicine,values:['🌙']}
            selectmedicine(medicine)
        }
        else if (e.target.innerHTML === 'Before Food'){
            let medicine=e.target.value;
            medicine={name:medicine,values:['Before Food']}
            selectmedicine(medicine)
        }
        else if (e.target.innerHTML === 'After Food'){
            let medicine=e.target.value;
            medicine={name:medicine,values:['After Food']}
            selectmedicine(medicine)
        }
    }

    const arr = [
        { name: "avinash" },
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
        { name: "dolo" },
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
            div.className=btn.value
        else
            div.className='selected-class'
    }

    const Medicines = () => {
        return medicines.map((medicine) => {
            return <div className='medicine'>
            <button onClick={addmed} value={medicine.name} className='add-medicine' >✅</button>
            <h1 className='medicine-name'>{medicine.name}</h1>
            <button onClick={addmed} value={medicine.name} className='medicine-button' >🌄</button>
            <button onClick={addmed} value={medicine.name} className='medicine-button' >🕛</button>
            <button onClick={addmed} value={medicine.name} className='medicine-button' >🌙</button>
            <button onClick={addmed} value={medicine.name} className='medicine-button-2' >Before Food</button>
            <button onClick={addmed} value={medicine.name} className='medicine-button-2' >After Food</button>
            </div>
        })
    }

    const Smedicines = () => {
        return smedicines.map((smedicine) => {
            return <div className='medicine'>
            <button onClick={addmed} value={smedicine.name} className='add-medicine' >❌</button>
            <h1 className='medicine-name'>{smedicine.name}</h1>
            {smedicine.values.map((values)=>{
                return <button onClick={addmed} value={smedicine.name} className='medicine-show' >{values}</button>
            })}
            </div>
        })
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
                        <Smedicines />
                    </div>
                    <input type='button' value='Send' className='submit-presc' />
                </div>
                <div className='medicines'>
                    <div className='medicine-search-div'>
                        <input type="text" placeholder="Search Medicine" className='medicine-search' />
                        <div className='search-icon'></div>
                    </div>
                    <div className='medicine-div'>
                        <Medicines />
                    </div>
                </div>
                <div className='medical-history'>
                    <button onClick={changeclass} className='partition-but' value='medical-history'>Medical History</button>
                </div>
                <div className='analysis'>
                    <button onClick={changeclass} className='partition-but' value='analysis'>Analysis</button>
                </div>
            </div>
        </div>
    );
}

export default Appointment;