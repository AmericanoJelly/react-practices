import React from 'react';
import styles from './assets/css/styles.css'

function searchbar(props) {
    return (
        <div className={styles.Searchbar}>
         찾기: <input type='text' placeholder='search'/>
       </div>
    );
}

export default searchbar;