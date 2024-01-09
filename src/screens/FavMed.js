import '../css/FavMed.css';
import React, { useState, useEffect } from 'react';


function FavMed() {

    const listmedicines = [
        { name: "paracetamol" },
        { name: "crocin" },
        { name: "dolo" },                                //Fav-medicines list to be displayed
        { name: "combiflam" },
        { name: "dolopar" },
        { name: "dolokind" },
        { name: "dolokind plus" },
        { name: "dolokind spas" },
        { name: "dolokind mr" },
        { name: "dolokind plus mr" },
        { name: "dolokind spas mr" },
    ]

    const [favmedicines, setFavmedicines] = useState(listmedicines) //to store the fav-medicines list
    const [searchmedicine, setSearchmedicine] = useState("") //to search the medicine in the fav-medicine list
    const [showmedicine, setShowmedicine] = useState({ name: "dolo", desc: "this is new medicine" }) //to show the medicine description on the right side of the screen

    const handlesearchchange = (e) => {
        setSearchmedicine(e.target.value)
    }

    useEffect(() => {            // minimize the list in medicines according to searchtext

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

        let newmedicines = listmedicines.filter((medicine) => medicine.name.toLowerCase().includes(searchmedicine.toLowerCase()))
        setFavmedicines([...newmedicines])
    }, [searchmedicine])

    const clearmed = () => {
        if (window.confirm("Are you sure you want to clear the medicine?")) {
            setShowmedicine({ name: "", desc: "" })
        }
    }

    const addmed = () => {
        if (window.confirm("Are you sure you want to add the medicine?")) {
            setFavmedicines([...favmedicines, { name: showmedicine.name }])
            setShowmedicine({ name: "", desc: "" })
        }
    }

    return (
        <div className="Fav-med">
            <h1 className='Fav-title'>Custom Medicine List</h1>

            <div className='Fav-med-main'>
                <div className="Fav-med-list">
                    <h2>Fav Medicine List</h2>
                    <div className='medicine-search-div'>
                        <input type="text" value={searchmedicine} onChange={handlesearchchange} placeholder="Search in Fav-Medicine" className='medicine-search' />
                        <div className='search-icon'></div>
                    </div>
                    <div className='Fav-medicine-list'>
                        {favmedicines.map((medicine) => (
                            <div className='Fav-medicine-name' key={medicine.name}>
                                <div className='Fav-medicine-name-div'>
                                    <div className='medicine-name-text'>
                                        {medicine.name}
                                    </div>
                                    <div className='medicine-name-icon'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="Fav-med-add">
                    <h2>Add New Medicine</h2>
                    <div className='medicine-search-div'>
                        <input type="text" placeholder="Global Search for Medicine" className='medicine-search' />
                        <div className='search-icon'></div>
                    </div>
                    <div className='medicine-div'>

                    </div>
                </div>

                <div className="Fav-med-desc">

                    <h2>Add Custom Medicine</h2>

                    <input type="text" value={showmedicine.name} onChange={(e) => setShowmedicine({ name: e.target.value, desc: showmedicine.desc })} placeholder="Medicine Name" className='Fav-medicine-name-input' />
                    <textarea value={showmedicine.desc} onChange={(e) => setShowmedicine({ name: showmedicine.name, desc: e.target.value })} className='Fav-medicine-desc' placeholder='Medicine Description'></textarea>
                    <div className='Fav-medicine-desc-btn-div'>
                        <button className='Fav-medicine-desc-btn' onClick={addmed} >Save</button>
                        <button className='Fav-medicine-desc-btn' onClick={clearmed}>Cancel</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FavMed;



