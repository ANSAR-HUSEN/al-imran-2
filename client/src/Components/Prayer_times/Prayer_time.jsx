import React, {useEffect} from 'react';
import PrayTimes from 'praytimess'
import './Prayer_time.css'
import solat from '../../assets/pray.png'
import AOS from 'aos';

const PrayerTime = () => {
const prayTimes = new PrayTimes();
prayTimes.setMethod('MWL');

const latitude = 9.028925730989538;
const longtude =    38.753402666834646;
const timezone = +3;
const dist = 0;
const timeformat = '12h';
const times = prayTimes.getTimes(new Date(), [latitude, longtude], timezone,dist, timeformat);
useEffect(()=>{
    AOS.init();
},[])
    return (
        <div className={classes.large_screen}>
            <div className={classes.solat_img} data-aos="fade-right">
                <img src={solat} alt="" />
            </div>
        <div className={classes.main_container}>
            <div className={classes.title}>
                <h1>የሶላት ወቅቶች በአዲስ አበባ</h1>
            </div>
            <div className={classes.time_container} data-aos="fade-left">
                <div className={classes.names_prayer}>
                    <ul>
                        <li><h4>ሶላት</h4></li>
                        <li>ፈጅር           {times.fajr}</li>
                        <li>ፀሀይ መዉጫ</li>
                        <li>ዙህር</li>
                        <li>ዓስር</li>
                        <li>መጝሪብ</li>
                        <li>ዒሻ</li>
                        
                    </ul>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default PrayerTime;