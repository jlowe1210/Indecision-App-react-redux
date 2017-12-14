import React from 'react';
import './option.css'
import '../../addOption/addoption'

const Option = props =>{
    return (
        <div>
            <p className='option'><span>{props.inx + 1}. {props.content}</span>
            <button onClick={props.remove} className='button button-link'>Remove</button>
            </p>
            
        </div>
    )
}

export default Option