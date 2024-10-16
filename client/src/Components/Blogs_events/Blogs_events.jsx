import React from 'react';
import madrasa from '../../assets/library1.jpg'
import student from '../../assets/graduate.jpg'
import './Blogs_events.css'

function Blogs_events() {
    return (
        // <div>
            <div className='wrapper'>
                <div className='blogsL'>
                    <div className='blog_image'>
                        <img src={madrasa} alt="" />
                    </div>
                    <div className='descriptionL'>
                        <p>how</p>
                        <p>yes</p>
                        <p>beeeee</p>
                    </div>
                </div>
                <div className='blogsR'>
                    <div className='blog_image'>
                        <img src={student} alt="" />    
                    </div>
                    <div className='descriptionR'>
                        <p>how</p>
                        <p>yes</p>
                        <p>beeeee</p>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default Blogs_events;