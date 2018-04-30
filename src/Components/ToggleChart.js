import React from 'react';

const ToggleChart = (props) => {
    return (
        <button className="toggleBtn" onClick={props.ToggleChart}>{props.children}</button>
    );
};

export default ToggleChart;