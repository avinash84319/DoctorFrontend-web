const React = require('react');


function Eventeditor(props) {

    const editdis = props.editdis
    const seteditdis = props.seteditdis
    const submitEvent = props.submitEvent
    const deleteEvent = props.deleteEvent
    const name = props.name
    const desc = props.desc
    const her = props.her
    const per = props.per
    const start = props.start
    const end = props.end
    const color = props.color
    const daystart = props.daystart
    const dayend = props.dayend
    const setname = props.setname
    const setdesc = props.setdesc
    const sether = props.sether
    const setper = props.setper
    const setstart = props.setstart
    const setend = props.setend
    const setcolor = props.setcolor
    const setstartday = props.setstartday
    const setendday = props.setendday
    const datetogrid = props.datetogrid
    const gridtodate = props.gridtodate
    const strinitdate = props.strinitdate
    const strfinaldate = props.strfinaldate

    return <div className="cal-event-editor" style={{ "display": editdis }}>
        <button className="cal-event-editor-close" onClick={() => { seteditdis("none") }}>❌</button>
        <h1>Event Editor</h1>
        <input type="text" onChange={(e) => setname(e.target.value)} value={name} placeholder="Name"></input>
        <input type="text" onChange={(e) => setdesc(e.target.value)} value={desc} placeholder="Description"></input>
        <input type="date" min={strinitdate} max={strfinaldate} onChange={(e) => setstartday(datetogrid(e.target.value))} value={gridtodate(daystart)} placeholder="Start Day"></input>
        <input type="date" min={strinitdate} max={strfinaldate} onChange={(e) => setendday(datetogrid(e.target.value))} value={gridtodate(dayend)} placeholder="End Day"></input>
        <input type="time" onChange={(e) => {setstart(e.target.value.substring(0,2));sether(e.target.value.substring(3,5))}} value={start+":"+her} placeholder="Start Time"></input>
        <input type="time" onChange={(e) => {setend(e.target.value.substring(0,2));setper(e.target.value.substring(3,5))}} value={end+":"+per} placeholder="End Time"></input>
        <input type="color" onChange={(e) => setcolor(e.target.value)} value={props.color} placeholder="Color"></input>
        <button onClick={submitEvent}>Submit</button>
        <button onClick={deleteEvent}>Delete</button>
    </div>
}

export default Eventeditor;