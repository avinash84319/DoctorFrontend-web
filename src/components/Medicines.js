const Medicines = (props) => {     // diplays medicines

    const medicines = props.medicines;
    const addmed = props.addmed;
    
    return medicines.map((medicine) => {
        return <div className='medicine'>
        <button onClick={addmed} value={medicine.name} className='add-medicine' >✅</button>
        <h1 className='medicine-name'>{medicine.name}</h1>
        <button onClick={addmed} value={medicine.name} className='medicine-button' >🌄</button>                       
        <button onClick={addmed} value={medicine.name} className='medicine-button' >🕛</button>
        <button onClick={addmed} value={medicine.name} className='medicine-button' >🌙</button>
        <button onClick={addmed} value={medicine.name} className='medicine-button-2' >Before Food</button>
        <button onClick={addmed} value={medicine.name} className='medicine-button-2' >After Food</button>
        <button onClick={addmed} value={medicine.name} className='medicine-button-3' >+</button>
        <button onClick={addmed} value={medicine.name} className='medicine-button-3' >-</button>
        </div>
    })
}

export default Medicines