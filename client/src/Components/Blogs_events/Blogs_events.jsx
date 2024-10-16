import React from 'react';
import madrasa from '../../assets/library1.jpg'
import student from '../../assets/graduate.jpg'
import './Blogs_events.css'

function Blogs_events() {
    return (
        <div className='main_wrapper'>
                <div className='title'>
                    <h1>አዳዲስ መረጃዎች እና ፈዋኢዶች</h1>
                </div>
            <div className='wrapper'>
                <div className='blogsL'>
                    <div className='blog_image'>
                        <img src={madrasa} alt="" />
                    </div>
                    <div className='descriptionL'>
                        <h2>የበድር ዘምቻ</h2>
                        <p style={{textAlign:'justify'}}>በኢስላም ታሪክ ውስጥ ታላቅ ስፍራ የሚሰጠው ታላቁ የበድር ዘመቻ የተደረገበት ለሊት! ...
                        እውነት በሐሰት ላይ ፣ እምነትም በባዕድ አምልኮ ላይ ድልን መቀዳጀቱ የታወጀባት ታላቅ ለሊት!</p>
                        <p>Jan 20/2024</p>
                    </div>
                </div>
                <div className='blogsR'>
                    <div className='blog_image'>
                        <img src={student} alt="" />    
                    </div>
                    <div className='descriptionR'>
                    <h2>ማዕክላችን</h2>
                        <p style={{textAlign:'justify'}}>ኣልዒምራን ተቋም የኢስላማዊ ትምህርትን ከዘመን ተሻጋሪ የእስልምና ወግ እና ጥበብ ጋር በማዋሃድ ኢስላማዊ እውቀትን ለማስፋፋት ከተመሠረተበት (1996 አ·ል) ጀምሮ፣</p>
                        <p>Jan 20/2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs_events;