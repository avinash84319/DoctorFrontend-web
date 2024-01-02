function Events(props){

    const events=props.events
    const clickonevent=props.clickonevent
    
    return events.map((event)=>{
    return <div className="cal-event-div" onClick={clickonevent} style={{"gridRow":String(Number(event.start)+2)+"/"+String(Number(event.end)+2),"gridColumn":String(Number(event.daystart)+2)+"/"+String(Number(event.dayend)+2)}}>
            <h1 className="cal-event-h">{event.name}</h1>
            </div>
}
)}

export default Events;