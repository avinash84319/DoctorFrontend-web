function Events(props){

    const events=props.events
    const clickonevent=props.clickonevent
    
    return events.map((event)=>{

     // calculate the hieght of event div using start:her and end:per are the start and end time of the event

    console.log(event)

    let stt=60*Number(event.start)+Number(event.her)
    console.log(stt)
    let ed=60*Number(event.end)+Number(event.per)
    console.log(ed)
    let hgt=((ed-stt)/60)*80
    console.log(hgt)

    return <div className="cal-event-cont" style={{"gridRow":String(Number(event.start)+2)+"/"+String(Number(event.end)+2),"gridColumn":String(Number(event.daystart)+2)+"/"+String(Number(event.dayend)+2)}}>
            <div className="cal-event-div" onClick={clickonevent} style={{top:String((event.her/60)*100)+"px","height":String(hgt)+"px",backgroundColor:event.color}} >
            <h1 className="cal-event-h">{event.name}</h1>
            </div>
            </div>
}
)}

export default Events;