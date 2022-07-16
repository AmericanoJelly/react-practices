import React from 'react';
import styles from './assets/css/styles.css'

function EmailList({emails}) {
    return (
        <div>
            <ul className={styles.Emaillist}>
                {emails.map((e) => 
                            (<li key={e.no}>
                                {e.firstName + e.lastName}
                                <br/>
                                {e.email}
                            </li>
                ))}
            </ul>
        </div>
    );
}

export default EmailList;