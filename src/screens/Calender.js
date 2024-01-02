import '../css/Calender.css';
import Events from '../components/Cal-Events';
import Head from '../components/Cal-Head';
import Rowstarter from '../components/Cal-Rowstarter';
import Eventeditor from '../components/Cal-Eventeditor';
import React, { useState } from 'react';

function Calender() {

    const [events, setevents] = useState([
        { daystart: 2, dayend: 3, start: 4, end: 5, desc: "adsda", name: "adadadada" },
        { daystart: 4, dayend: 5, start: 3, end: 4, desc: "adsda", name: "adadadda" },
        { daystart: 2, dayend: 3, start: 2, end: 3, desc: "adsda", name: "dadadad" },
    ])

    const [editdis, seteditdis] = useState("none")

    // state for all the inputs
    const [name, setname] = useState("")
    const [desc, setdesc] = useState("")
    const [daystart, setstartday] = useState("")
    const [dayend, setendday] = useState("")
    const [start, setstart] = useState("")
    const [end, setend] = useState("")

    const daysdates = [
        { day: "monday", date: "31" },
        { day: "tuesday", date: "1" },
        { day: "wednesday", date: "2" },
        { day: "thursday", date: "3" },
        { day: "friday", date: "4" },
        { day: "saturday", date: "5" },
        { day: "sunday", date: "6" }
    ]

    const times = [
        { time: 0 },
        { time: 1 },
        { time: 2 },
        { time: 3 },
        { time: 4 },
        { time: 5 },
        { time: 6 },
        { time: 7 },
        { time: 8 },
        { time: 9 },
        { time: 10 },
        { time: 11 },
        { time: 12 }
    ]

    function addevent() {
        if (editdis === "none") {
            seteditdis("block")
            // set the inputs to empty
            setname("")
            setdesc("")
            setstartday("")
            setendday("")
            setstart("")
            setend("")
        }
        else {
            seteditdis("none")
        }
    }

    const clickonevent = (e) => {
        let event = e.target
        let name = event.innerText
        // search in events for the event with name
        let desc = ""
        let start = 0
        let end = 0
        let daystart = 0
        let dayend = 0
        for (let i = 0; i < events.length; i++) {
            if (events[i].name === name) {
                desc = events[i].desc
                start = events[i].start
                end = events[i].end
                daystart = events[i].daystart
                dayend = events[i].dayend
            }
        }
        setname(name)
        setdesc(desc)
        setstartday(daystart)
        setendday(dayend)
        setstart(start)
        setend(end)
        seteditdis("block")
    }

    const submitEvent = (e) => {
        e.preventDefault()
        let btn = e.target
        let name = btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        let desc = btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        let startday = btn.previousSibling.previousSibling.previousSibling.previousSibling.value
        let endday = btn.previousSibling.previousSibling.previousSibling.value
        let starttime = btn.previousSibling.previousSibling.value
        let endtime = btn.previousSibling.value
        let start = parseInt(starttime)
        let end = parseInt(endtime)
        let daystart = parseInt(startday)
        let dayend = parseInt(endday)
        let event = { daystart, dayend, start, end, desc, name }
        // check if the event is already there
        let store;
        for (let i = 0; i < events.length; i++) {
            if (events[i].name === name) {
                store = events[i]
                events.splice(i, 1)
            }
        }
        if (name===store.name && desc===store.desc && start===store.start && end===store.end && daystart===store.daystart && dayend===store.dayend){
            alert("Event already exists")
            setevents([...events, store])
        }
        else{
            setevents([...events, event])
        }
        seteditdis("none")
    }

    const deleteEvent = (e) => {
        e.preventDefault()
        let btn = e.target
        let name = btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        // check if the event is already there
        for (let i = 0; i < events.length; i++) {
            if (events[i].name === name) {
                events.splice(i, 1)
            }
        }
        setevents([...events])
        seteditdis("none")
    }



    return (
        <div className="calender">
            <div className='cal-header-add'>
                <button onClick={addevent} className='cal-header-add-btn'>➕</button>
            </div>
            <Head daysdates={daysdates} />
            <Rowstarter times={times} />
            <Events events={events} clickonevent={clickonevent} />
            <Eventeditor editdis={editdis} seteditdis={seteditdis} submitEvent={submitEvent} deleteEvent={deleteEvent}
                name={name}
                desc={desc}
                daystart={daystart}
                dayend={dayend}
                start={start}
                end={end}
                setname={setname}
                setdesc={setdesc}
                setstartday={setstartday}
                setendday={setendday}
                setstart={setstart}
                setend={setend}
            />
        </div>
    )
}

export default Calender;