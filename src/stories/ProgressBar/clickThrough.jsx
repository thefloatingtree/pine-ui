import ProgressBar from "./ProgressBar";
import '../../index.css';
import React, {Fragment, useState} from "react";
import { useEffect } from "react";

export default function ClickThrough(props) {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(25)


    function next(e) {
        
        setStart(prev => {
            return prev + 25;
        })
        setEnd(prev => {
            return prev + 25;
        })
    }

    return (
        <Fragment>
            <ProgressBar startFill={start + "%"} endFill={end + "%"} color={props.color} key={Math.random()}></ProgressBar>
            <button className="round-button" onClick={next}>Next</button>
        </Fragment>
    )
    
}
