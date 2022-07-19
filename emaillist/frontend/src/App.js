import React from 'react';
import emails from './assets/json/data.json';
import EmailList from './EmailList';
import SearchBar from './SearchBar';
import styles from './assets/css/styles.css';


function App() {
    return (
        <div id={styles.App}>
            <SearchBar/>
           <EmailList emails={emails} />
        </div>
    );
}

export default App;