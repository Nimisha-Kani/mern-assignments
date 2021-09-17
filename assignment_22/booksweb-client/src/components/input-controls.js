import React, { useState,useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



export const IconInput = ({ id, value, icon,disabled, placeholder, type, onChange }) => {

    const [text, setText] = useState(value);
    if (!placeholder) placeholder = id;
    if (!type) type = "text";

    useEffect(()=>{
        setText(value); //If value change outside the box
    },[value]);


    const handleChange = (e) => {
        onChange(e.target.id, e.target.value);
        setText(e.target.value);
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={icon}/>
            </span>
               
            </div>
            <input id={id} disabled={disabled}  type={type} onChange={handleChange} value={text} className="form-control" placeholder={placeholder} aria-label={id} aria-describedby="basic-addon1" />
        </div>
        );
}



export const LabeledInput = ({ id, value, label, placeholder, type, onChange }) => {

    const [text, setText] = useState(value);
    if (!placeholder) placeholder = id;
    if (!type) type = "text";

    if (!label)
        label = id.toUpperCase();

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value);
        setText(e.target.value);
    }

    return (
        <div className="form-group">
            <label htmlFor="title">{label}</label>
            <input type={type}
                id={id}
                className="form-control"
                placeholder={placeholder}
                value={text}
                onChange={handleChange}
            />
        </div>
    );
}

export const LabeledTextArea = ({ id, value, label, placeholder, type, onChange }) => {

    const [text, setText] = useState(value);
    if (!placeholder) placeholder = id;
    if (!type) type = "text";
    if (!label)
        label = id.toUpperCase();

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value);
        setText(e.target.value);
    }

    return (
        <div className="form-group">
            <label htmlFor="title">{label}</label>
            <textarea type={type}
                id={id}
                className="form-control"
                placeholder={placeholder}
                value={text}
                onChange={handleChange}
            />
        </div>
    );
}
