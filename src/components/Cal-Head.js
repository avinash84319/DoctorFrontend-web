function Head(props){

    const daysdates=props.daysdates
    
    return daysdates.map((daydate)=>{
    return <div className="cal-header-day">
            <h1 className='cal-header-date'>{daydate.date}</h1>
            <h2 className='cal-header-day'>{daydate.day}</h2>
            </div>
}
)}

export default Head;