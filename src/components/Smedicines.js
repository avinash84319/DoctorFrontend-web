const Smedicines = (prop) => {                                             // displays selected medicines or prescription

    const smedicines = prop.smedicines;
    const addmed = prop.addmed;

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

export default Smedicines