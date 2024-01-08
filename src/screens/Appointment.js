import { Link } from 'react-router-dom';
import '../css/Appointment.css';
import React, { useState,useEffect } from 'react';
import Analysis from '../components/Analysis';
import EarlyAnalysis from '../components/EarlyAnalysis';
import Smedicines from '../components/Smedicines';
import Medicines from '../components/Medicines';

function Appointment() {

    const [patientID, setPatientID] = useState('0123445');        // patient name

    const listpatients = [
        { name:"avinash",id:"0123445" },                 // patient names
        { name:"subbu",id:"0123446" },
        { name:"dixth",id:"0123447" },
        { name:"sanjay",id:"0123448" }
    ]

    const listmedicines = [
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

    const [smedicines,setsMedicines]=useState([])
    const [medicines,setMedicines]=useState(listmedicines)
    const [searchtext,setSearchtext]=useState('')

    const changeSearch=(e)=>{
        setSearchtext(e.target.value)
    }

    useEffect(()=>{            // minimize the list in medicines according to searchtext

        const listmedicines = [
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
        
        let newmedicines=listmedicines.filter((medicine)=>medicine.name.toLowerCase().includes(searchtext.toLowerCase()))
        setMedicines([...newmedicines])
    },[searchtext])

    

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
            else{
                store.count=store.count+medicine.count;
                if (store.count<1){
                    setsMedicines([...newmedicines])                  // add store to smedicines
                }
                else{
                setsMedicines([...newmedicines,store])                  // add store to smedicines
                }
            }
        }
        else{

            if (medicine.count===+1){           // if count is -1 then remove medicine
                medicine.count=1;
                setsMedicines([...smedicines,medicine])
            }
            else if(medicine.count===-1){
                //do nothing
            }
            else{
                medicine.count=1;
                setsMedicines([...smedicines,medicine])
            }
        }
    }

    function removemedicine(medicine){
        // remove medicine from smedicines
        let newmedicines=smedicines.filter((smedicine)=>smedicine.name!==medicine.name)          // remove medicine from smedicines
        setsMedicines([...newmedicines])                                                      // add store to smedicines
    }

    const addmed = (e) => {    
        console.log(e.target.innerHTML)                                                   // function to handle buttons in medicines
        if (e.target.innerHTML === '✅' ){
            // add medicine to smedicines
            // let butt=e.target;
            // if (butt.className==='add-medicine')
            //     butt.className='added-medicine';
            // else{
            //     butt.className='add-medicine'
            // }
            selectmedicine({name:e.target.value,values:[],count:+1})
        }
        else if (e.target.innerHTML === '❌'){
            selectmedicine({name:e.target.value,values:[],count:-1})
        }
        else if (e.target.innerHTML==='+'){        // increase the count
            selectmedicine({name:e.target.value,values:[],count:+1})
        }
        else if (e.target.innerHTML==='-'){        // decrease the count
            selectmedicine({name:e.target.value,values:[],count:-1})
        }
        else{                                                           // add value to medicine
            // let butt=e.target;
            // let parentdiv=butt.closest('div')
            // let classbut=parentdiv.querySelectorAll('button')[0].className
            // console.log(classbut)
            // if (classbut==='add-medicine'){
            //     parentdiv.querySelectorAll('button')[0].className='added-medicine'
            // }
            // console.log(butt.className)
            // if (butt.className==='medicine-button-2'){
            //     butt.className='added-medicine-2'
            // }
            // if (butt.className==='medicine-button')
            //     butt.className='added-medicine';
            // else{
            //     butt.className='medicine-button'
            // }
            let medicine=e.target.value;
            medicine={name:medicine,values:[e.target.innerHTML]}           // medicine object
            selectmedicine(medicine)
        }
    }

    const selectpatient = (e) => {
        // find patient id in listpatients
        let patientname = e.target.innerHTML;
        let patientid;
        for (let i = 0; i < listpatients.length; i++) {
            if (listpatients[i].name === patientname) {
                patientid = listpatients[i].id;
                break;
            }
        }
        setPatientID(patientid);

    };


    const Patients = () => {
        return listpatients.map((patient) => {
            if (patient.id === patientID)
                return <button onClick={selectpatient} className='patient-button-selected'>{patient.name}</button>
            else return <button onClick={selectpatient} className='patient-button'>{patient.name}</button>
        })
    }

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
                        <input type="text" placeholder="Search Medicine" className='medicine-search' value={searchtext} onChange={changeSearch} />
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