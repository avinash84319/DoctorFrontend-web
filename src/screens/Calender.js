import '../css/Calender.css';
import Events from '../components/Cal-Events';
import Head from '../components/Cal-Head';
import Rowstarter from '../components/Cal-Rowstarter';
import Eventeditor from '../components/Cal-Eventeditor';
import React, { useState } from 'react';

function Calender() {

    const [events, setevents] = useState([
        { daystart: 2, dayend: 3,per:20,her:40, start: "04", end: "05", desc: "adsda", name: "adadadada",color:"red"},
        { daystart: 4, dayend: 5,per:20,her:40, start: "03", end: "04", desc: "adsda", name: "adadadda",color:"blue"},
        { daystart: 2, dayend: 3,per:20,her:40, start: "02", end: "03", desc: "adsda", name: "dadadad",color:"green"},
    ])

    const [editdis, seteditdis] = useState("none")

    // state for all the inputs
    const [name, setname] = useState("")
    const [desc, setdesc] = useState("")
    const [her, sether] = useState("")
    const [per, setper] = useState("")
    const [daystart, setstartday] = useState("")
    const [dayend, setendday] = useState("")
    const [start, setstart] = useState("04")
    const [end, setend] = useState("05")
    const [color, setcolor] = useState("red")

    const strinitdate = '2023-12-31'
    const strfinaldate = '2024-01-06'
    const initdate = new Date(strinitdate)

    const daysdates = [
        { day: "monday", date: "31" },
        { day: "tuesday", date: "1" },
        { day: "wednesday", date: "2" },
        { day: "thursday", date: "3" },
        { day: "friday", date: "4" },
        { day: "saturday", date: "5" },
        { day: "sunday", date: "6" },
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
        { time: 12 },
        { time: 13 },
        { time: 14 },
        { time: 15 },
        { time: 16 },
        { time: 17 },
        { time: 18 },
        { time: 19 },
        { time: 20 },
        { time: 21 },
        { time: 22 },
        { time: 23 },
        { time: 24 },
    ]

    function datetogrid(date){
        date=new Date(date)
        console.log(date)
        let gridate=date.getTime()-initdate.getTime()
        gridate=Math.floor(gridate/(1000*60*60*24))
        return gridate
    }

    function gridtodate(gridate){
        let date=initdate.getTime()+gridate*(1000*60*60*24)
        date=new Date(date)
        date=date.toISOString().substring(0,10);
        return date
    }        

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
            setcolor("")
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
        let her = 0
        let per = 0
        let start = 0
        let end = 0
        let daystart = 0
        let dayend = 0
        let color = ""
        for (let i = 0; i < events.length; i++) {
            if (events[i].name === name) {
                desc = events[i].desc
                her = events[i].her
                per = events[i].per
                start = events[i].start
                end = events[i].end
                daystart = events[i].daystart
                dayend = events[i].dayend
                color = events[i].color
            }
        }
        setname(name)
        setdesc(desc)
        sether(her)
        setper(per)
        setstartday(daystart)
        setendday(dayend)
        setstart(start)
        setend(end)
        setcolor(color)
        seteditdis("block")
    }

    const submitEvent = (e) => {
        e.preventDefault()
        let btn = e.target
        let name = btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        let desc = btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        let startday = btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        let endday = btn.previousSibling.previousSibling.previousSibling.previousSibling.value
        let starttime = btn.previousSibling.previousSibling.previousSibling.value
        let endtime = btn.previousSibling.previousSibling.value
        let color = btn.previousSibling.value
        let startt = starttime
        let endt = endtime
        let start = startt.substring(0, 2)
        let end = endt.substring(0, 2)
        let her = startt.substring(3,5)
        let per = endt.substring(3,5)
        let daystart = datetogrid(startday)
        let dayend = datetogrid(endday)
        let event = {her,per,daystart, dayend, start, end, desc, name,color}
        console.log(event)
        // check if the event is already there
        let store="";
        for (let i = 0; i < events.length; i++) {
            if (events[i].name === name) {
                store = events[i]
                events.splice(i, 1)
            }
        }
        if (store===""){
            setevents([...events, event])
        }
        else if(name===store.name && desc===store.desc &&her===store.her &&per===store.per && start===store.start && end===store.end && daystart===store.daystart && dayend===store.dayend && color===store.color){
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
                her={her}
                per={per}
                daystart={daystart}
                dayend={dayend}
                start={start}
                end={end}
                color={color}
                setname={setname}
                setdesc={setdesc}
                sether={sether}
                setper={setper}
                setstartday={setstartday}
                setendday={setendday}
                setstart={setstart}
                setend={setend}
                setcolor={setcolor}
                datetogrid={datetogrid}
                gridtodate={gridtodate}
                strinitdate={strinitdate}
                strfinaldate={strfinaldate}
            />
        </div>
    )
}

export default Calender;