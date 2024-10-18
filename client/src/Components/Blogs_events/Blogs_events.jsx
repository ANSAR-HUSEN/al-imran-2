import React from 'react';
import madrasa from '../../assets/library1.jpg'
import student from '../../assets/graduate.jpg'
import classes from './Blogs_events.module.css'

function Blogs_events() {
    return (
        <div className={classes.main_wrapper}>
                <div className={classes.title}>
                    <h1>አዳዲስ መረጃዎች እና ፈዋኢዶች</h1>
                </div>
            <div className={classes.wrapper}>
                <div className={classes.blogsL}>
                    <div className={classes.blog_image}>
                        <img src={madrasa} alt="" />
                    </div>
                    <div className={classes.descriptionL}>
                        <h2>የበድር ዘምቻ</h2>
                        <p style={{textAlign:'justify'}}>በኢስላም ታሪክ ውስጥ ታላቅ ስፍራ የሚሰጠው ታላቁ የበድር ዘመቻ የተደረገበት ለሊት! ...
                        እውነት በሐሰት ላይ ፣ እምነትም በባዕድ አምልኮ ላይ ድልን መቀዳጀቱ የታወጀባት ታላቅ ለሊት!</p>
                        <p>Jan 20/2024</p>
                    </div>
                </div>
                <div className={classes.blogsR}>
                    <div className={classes.blog_image}>
                        <img src={student} alt="" />    
                    </div>
                    <div className={classes.descriptionR}>
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