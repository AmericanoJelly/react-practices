import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <div id = 'App'>
            <MyComponent 
                // props01={'문자열'}
                props02={200}
                props03={1-1 === 0}
                props04={{no:1,name:'돌리'}}
                props05={['루시', '브레드', '타미', '레이첼']}
                props06={()=>'함수'}
            />
        </div>
    );
}

export default App;