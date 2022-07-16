import React from 'react';
import emails from './assets/json/data.json';
import styles from './assets/css/styles.css';
import EmailList from './EmailList';
import SearchBar from './SearchBar';


function App() {
    return (
        <div id={styles.App}>
            <SearchBar/>
           <EmailList emails={emails} />
        </div>
    );
}

export default App;