import React from 'react';

import './Promt.css';

const PromtForm = ({ onPromted }) => (<div className="promt-form">
        <h3 className='promt-title'>What is your main focus for today?</h3>
        <input className='promt-input' type="text" onKeyPress={onPromted} />
    </div>);

export default PromtForm;