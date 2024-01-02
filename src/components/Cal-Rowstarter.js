function Rowstarter(props){

    const times=props.times
    
    return times.map((time)=>{
    return <div className="cal-row-starter">
            <h1>{time.time}</h1>
            </div>
}
)}

export default Rowstarter;