function Eventeditor(props){

    const editdis=props.editdis
    const submitEvent=props.submitEvent
    
    return <div className="cal-event-editor" style={{"display":editdis}}>
            <h1>Event Editor</h1>
            <input type="text"  placeholder="Event Name"></input>
            <input type="text"  placeholder="Event Description"></input>
            <input type="text"  placeholder="Event Start Day"></input>
            <input type="text"  placeholder="Event End Day"></input>
            <input type="text"  placeholder="Event Start Time"></input>
            <input type="text"  placeholder="Event End Time"></input>
            <button onClick={submitEvent}>Submit</button>
        </div>
}

export default Eventeditor;