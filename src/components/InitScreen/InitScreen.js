import React from 'react';

import './InitScreen.css';

const InitScreen = ({setUserName}) => {
    return <div className='init-screen'>
        <h3>What's Your Name?</h3>
        <input className='init-username' type="text" onKeyPress={setUserName} />
    </div>;
};

export default InitScreen;