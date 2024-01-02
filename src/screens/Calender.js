import '../css/Calender.css';
import Events from '../components/Events';
import Head from '../components/Cal-Head';
import Rowstarter from '../components/Cal-Rowstarter';
import Eventeditor from '../components/Cal-Eventeditor';
import React,{useState} from 'react';

function Calender(){

    const [events,setevents]=useState([
        {daystart:2,dayend:3,start:2,end:3,desc:"dadadadad"},
        {daystart:2,dayend:3,start:4,end:5,desc:"adadadada"},
        {daystart:4,dayend:5,start:3,end:4,desc:"adadadada"},
    ])

    const [editdis,seteditdis]=useState("none")

    const daysdates=[
        {day:"monday",date:"31"},
        {day:"tuesday",date:"1"},
        {day:"wednesday",date:"2"},
        {day:"thursday",date:"3"},
        {day:"friday",date:"4"},
        {day:"saturday",date:"5"},
        {day:"sunday",date:"6"}
    ]

    const times=[
        {time:0},
        {time:1},
        {time:2},
        {time:3},
        {time:4},
        {time:5},
        {time:6},
        {time:7},
        {time:8},
        {time:9},
        {time:10},
        {time:11},
        {time:12}
    ]

    function addevent(){
        if (editdis==="none"){
            seteditdis("block")
        }
        else{
            seteditdis("none")
        }
    }

    const submitEvent=(e)=>{
        e.preventDefault()
        let btn=e.target
        let name=btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        let desc=btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
        let startday=btn.previousSibling.previousSibling.previousSibling.previousSibling.value
        let endday=btn.previousSibling.previousSibling.previousSibling.value
        let starttime=btn.previousSibling.previousSibling.value
        let endtime=btn.previousSibling.value
        let start=parseInt(starttime)+2
        let end=parseInt(endtime)+2
        let daystart=parseInt(startday)+2
        let dayend=parseInt(endday)+2
        let event={daystart,dayend,start,end,desc,name}
        setevents([...events,event])
        seteditdis("none")
    }

    

    return(
        <div className="calender">
                <div className='cal-header-add'>
                    <button onClick={addevent} className='cal-header-add-btn'>➕</button>
                </div>
                <Head daysdates={daysdates} />
                <Rowstarter times={times} />
                <Events events={events} />
                <Eventeditor editdis={editdis} submitEvent={submitEvent} />
        </div>
    )
}

export default Calender;