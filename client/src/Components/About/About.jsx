import React from 'react'
import classes from'./About.module.css'
import madrasa from '../../assets/masjid.jpg'

function About() {
  return (
    <div className={classes.main_wrapper}>
    <div className={classes.title}>
        <h1>ስለ አል-ዒምራን</h1>
    </div>
<div className={classes.wrapper}>
    <div className={classes.blogsL}>
        <div className={classes.blog_image}>
            <img src={madrasa} alt="" />
        </div>
        <div className={classes.descriptionL}>
            <h2>አል-ዒምራን መድረሳ</h2>
            <p style={{textAlign:'justify'}}> በዚህ ሰሞን በጣም  ሆዴን ባር ባር ይለኛል  ይጨንቀኛል ታዲያ መፍትሄ ፍለጋ የተማሩ ጠንቋይ ወደ ሚባሉት ወደ አንዱ ሳይኮሎጂስት ጎራ አልኩኝ በሩን ቆርቆሬ በጨዋ ደንብ አስፈቅጄ ገባሁኝ ሳይኮሎጂስቱ በጣም ድብርት ተጫጭኖት ነበረ ስገባ ቆጭ በለ አለኝ ቀጥታ የመጣህበት ጉዳይ ምንድነው ሲለኝ በጣም ይጨነቀኛል ይደብረኛል  አንዳንዴም አልቅስ አልቅስ እንደሚለኝ ነገርኩት በድንገት ቀና ስል የእሱ እንባ ዱብ ዱብ ይላል የኔ ጉዳይ አሳስቦት መስሎኝ አረ ብዙም አያሳስብም አልኩት እሱም ተወኝ ባክህ የኔ ከአንተ ችግር ይብሳል ብሎ ንፍርቅ ማለት ችግሩን ዝክዝክ አድርጎ ሲነግረኝ በጣም አሳዘነኝ በተለይ እሱ ጋር መፍትሔ ፍለጋ የሚመጡ ሰውች ይበልጡን አሳዘኑኝ እኔም በቻልኩት መጠን አፅናናሁት አባበልኩት ምክር ቢጤም ለገስኩት ስወጣ እኔው መክሬ እኔው ከፈልኩኝ ይህ ጉዳይ የተዘጋ ፍይል ቢሆንም እንዳነሳው ያደረገኝ በዚህ ሰሞን ሁለት </p>
            <button>ተጨማሪ..</button>
        </div>
    </div>
</div>
</div>
  )
}

export default About;