import React from 'react'
import {Link} from 'react-router-dom';
export default function Menu() {


    return (
        <div className='card'>
            <div className='row'>
                <div className='col-6'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='col-6'>
                    <Link to='/login'>log in</Link>
                </div>
            </div>
            
        </div>
    )
}