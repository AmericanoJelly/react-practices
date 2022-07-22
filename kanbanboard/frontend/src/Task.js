import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './assets/css/Task.css';

export default function Task({no, name, done}) {
    const [check, setCheck] = useState(false);

    const onChangeCheckbox = e =>{
        setCheck(check=>!check);
    } 
    

    return (
        <li className={styles.Task} >
            <input 
                type='checkbox' 
                onChange={onChangeCheckbox}/>
            {name}
            <a href='#' className={styles.Task__remove}/>
        </li>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired
}