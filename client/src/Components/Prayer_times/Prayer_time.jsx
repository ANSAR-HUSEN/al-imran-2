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
        <div className='large_screen'>
            <div className='solat_img' data-aos="fade-right">
                <img src={solat} alt="" />
            </div>
        <div className='main_container'>
            <div className='title'>
                <h1>የሶላት ወቅቶች በአዲስ አበባ</h1>
            </div>
            <div className='time_container' data-aos="fade-left">
                <div className='names_prayer' >
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
                <div className='azan_times' >
                    <ul style={{color:'#EA8723'}} >
                        <li><h4 style={{color:'black'}}>ወቅት</h4></li>
                        {/* <li>{times.fajr}</li> */}
                        <li>{times.sunrise}</li>
                        <li>{times.dhuhr}</li>
                        <li>{times.asr}</li>
                        <li>{times.maghrib}</li>
                        <li>{times.isha}</li>
                    </ul>
                </div>
                {/* <div></div> */}
            </div>
            {/* <h1>Fajir {times.fajr}</h1>
            <h1>dhuhur {times.dhuhr}</h1>
            <h1>Asr {times.asr}</h1>
            <h1>maghrib {times.maghrib}</h1>
            <h1>isha {times.isha}</h1> */}

        </div>
        </div>
    );
};

export default PrayerTime;