function Events(props){

    const events=props.events
    const clickonevent=props.clickonevent
    
    return events.map((event)=>{
    return <div className="cal-event-div" onClick={clickonevent} style={{"gridRow":event.start+"/"+event.end,"gridColumn":event.daystart+"/"+event.dayend}}>
            <h1 className="cal-event-h">{event.name}</h1>
            </div>
}
)}

export default Events;