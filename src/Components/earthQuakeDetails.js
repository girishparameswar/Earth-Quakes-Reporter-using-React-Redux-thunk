import React from "react";

const EarthQuakeDetails = (props) => {
    return (
        <div className ='earthquake-details'>
            <p>An earthquake happened at {props.place}</p>
            <p>The magnitude level is {props.mag}</p>
        </div>
    );
}


export default EarthQuakeDetails;