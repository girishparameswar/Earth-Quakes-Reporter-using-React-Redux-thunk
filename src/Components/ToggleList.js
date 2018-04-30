import React from 'react';

const ToggleList =(props) =>{
    return (
        <button className="toggleBtn" onClick={props.ToggleList}>{props.children}</button>
    );
};

 export  default ToggleList;