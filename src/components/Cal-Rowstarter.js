function Rowstarter(props){

    const times=props.times
    
    return times.map((time)=>{
    return <div className="cal-row-starter">
            <h1 className="cal-row-starter-h">{time.time}</h1>
            </div>
}
)}

export default Rowstarter;