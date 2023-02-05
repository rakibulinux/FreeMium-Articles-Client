import React from 'react';
import { Link } from 'react-router-dom';

const Following = () => {
    return (
        <div>
            <h1>Writers</h1>
            <div className="divider"></div> 
            <h1>Publications</h1>
            <p>You haven’t followed any publications yet.</p>
            <Link className='link-success'>See suggestions</Link>
            <div className="divider"></div> 
            <h1>Topics</h1>
            <p>You haven’t followed any topics yet.</p>
            <Link className='link-success'>See suggestions</Link>
            <div className="divider"></div> 
        </div>
    );
};

export default Following;