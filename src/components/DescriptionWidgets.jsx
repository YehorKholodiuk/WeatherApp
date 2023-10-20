import React from 'react';
import './descriptionWidgets.css'
import {FaArrowDown} from 'react-icons/fa'

const DescriptionWidgets = ({weather,units}) => {
    const tempUnit = units === 'metric'? 'C':'F'
    const windUnit = units === 'metric' ? 'm/s':'m/h'
    const pressureUnit = units === 'metric' ?'inHg':'m/b'

    const cards = [
        {   id:1,
            title:'min',
            data:weather.temp_min.toFixed(),
            unit:tempUnit,
        },

        {
            id:2,
            title:'max',
            data:weather.temp_max.toFixed(),
            unit:tempUnit,
        },
        {
            id:3,
            title:'feels_like',
            data:weather.feels_like.toFixed(),
            unit:tempUnit,
        },
        {
            id:4,
            title:'pressure',
            data:weather.pressure.toFixed(),
            unit:pressureUnit, //todo pressure unit
        },

        {
            id:5,
            title:'humidity',
            data:weather.humidity.toFixed(),
            unit:'%', //todo pressure unit
        },

       {
           id:6,
           title:'Wind Speed',
           data:weather.speed.toFixed(),
           unit: windUnit,
     },


    ]
    return (

<div className="section section_descriptionWidgets">

    { cards.map (({id, icon, title,data ,unit}) => (
            <div className="card">
                <div key={id} className="description_card_item">
                    {icon}
                    <small>{title}</small>
                </div>
                <h2>{`${data} ${unit}`}</h2>
            </div>
    ))}
</div>


    );
};

export default DescriptionWidgets;
