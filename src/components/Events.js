function Events(props){

    const events=props.events
    
    return events.map((event)=>{
    return <div className="cal-event-div" style={{"gridRow":event.start+"/"+event.end,"gridColumn":event.daystart+"/"+event.dayend}}>
            <h1>{event.desc}</h1>
            </div>
}
)}

export default Events;